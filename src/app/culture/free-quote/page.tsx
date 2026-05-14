"use client";

import { useEffect } from "react";
import CulturePage from "@/app/culture/page";

export default function CultureFreeQuotePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("bp:open-free-quote"));
  }, []);

  return <CulturePage />;
}