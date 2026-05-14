"use client";

import { useEffect } from "react";
import ShopifyPage from "@/app/shopify/page";

export default function ShopifyFreeQuotePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("bp:open-free-quote"));
  }, []);

  return <ShopifyPage />;
}