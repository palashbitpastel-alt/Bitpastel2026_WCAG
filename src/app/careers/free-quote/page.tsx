"use client";

import { useEffect } from "react";
import CareersPage from "@/app/careers/page";

export default function CareersFreeQuotePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("bp:open-free-quote"));
  }, []);

  return <CareersPage />;
}