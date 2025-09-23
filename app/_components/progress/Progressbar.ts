// components/ProgressBar.js
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ✅ Route change শেষ হলে progress bar বন্ধ
  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const anchor = event.currentTarget;
      if (!anchor || !anchor.href) return;

      const targetUrl = anchor.href;
      const currentUrl = window.location.href;

      // ✅ External link হলে বা নতুন ট্যাব হলে কিছুই করব না
      const isExternal = !targetUrl.startsWith(window.location.origin);
      const isNewTab = (anchor.target ?? "").toLowerCase() === "_blank";

      if (isExternal || isNewTab) return;

      // ✅ Internal route কিন্তু same page হলে progress দেখাব না
      if (targetUrl === currentUrl) return;

      // ✅ Internal route & নতুন page হলে progress দেখাব
      NProgress.start();
    };

    const attachListeners = () => {
      document.querySelectorAll("a").forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
        anchor.addEventListener("click", handleAnchorClick);
      });
    };

    // প্রথমবারে anchor গুলাতে listener attach করা
    attachListeners();

    // MutationObserver দিয়ে নতুন anchor add হলে আবার attach করা
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.querySelectorAll("a").forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return null;
}
