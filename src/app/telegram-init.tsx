"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
      };
    };
  }
}

export function TelegramInit() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    tg.ready();
    tg.expand();
  }, []);

  return null;
}
