"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormReady?: () => void;
        }) => void;
      };
    };
  }
}

const HS_SCRIPT_SRC = "https://js.hsforms.net/forms/embed/v2.js";
let scriptLoading: Promise<void> | null = null;

function loadHubSpotScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt?.forms?.create) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HS_SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("HubSpot script failed to load")));
      if (window.hbspt?.forms?.create) resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = HS_SCRIPT_SRC;
    s.async = true;
    s.charset = "utf-8";
    s.type = "text/javascript";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("HubSpot script failed to load"));
    document.head.appendChild(s);
  });
  return scriptLoading;
}

export default function HubSpotForm({
  className = "",
}: {
  className?: string;
}) {
  // Stable, unique target id per instance so multiple forms can coexist.
  const targetId = `hs-form-${useId().replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    loadHubSpotScript()
      .then(() => {
        if (cancelled) return;
        if (!window.hbspt?.forms?.create) {
          setStatus("error");
          return;
        }
        // Clear container (in case of remount/HMR).
        if (containerRef.current) containerRef.current.innerHTML = "";
        window.hbspt.forms.create({
          portalId: site.hubspot.portalId,
          formId: site.hubspot.formId,
          region: site.hubspot.region,
          target: `#${targetId}`,
          onFormReady: () => setStatus("ready"),
        });
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [targetId]);

  return (
    <div className={`hs-form-wrap ${className}`}>
      {status === "loading" && (
        <div className="space-y-3 animate-pulse">
          <div className="h-10 rounded-lg bg-black/5" />
          <div className="h-10 rounded-lg bg-black/5" />
          <div className="h-10 rounded-lg bg-black/5" />
          <div className="h-12 rounded-full bg-black/10 mt-2" />
        </div>
      )}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          We couldn't load the form. Please call{" "}
          <a className="underline font-semibold" href={site.phoneHref}>
            {site.phone}
          </a>{" "}
          or email{" "}
          <a className="underline font-semibold" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </div>
      )}
      <div id={targetId} ref={containerRef} />
    </div>
  );
}
