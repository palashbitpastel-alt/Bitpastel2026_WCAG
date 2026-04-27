"use client";

import { useEffect } from "react";
import HomePage from "@/app/home/page";

export default function FreeQuotePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Tell the globally-mounted Header (in the root layout) to open the modal.
    // Header listens for this event and opens the Free Quote modal without
    // pushing another history entry, since the URL is already /free-quote.
    window.dispatchEvent(new CustomEvent("bp:open-free-quote"));
  }, []);

  // Render the home page beneath so the modal overlays real content rather
  // than a blank background when the user navigates to /free-quote directly.
  return <HomePage />;
}
