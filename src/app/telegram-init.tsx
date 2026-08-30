"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        disableVerticalSwipes?: () => void;
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
    // Sahifa ichidagi oddiy scroll'ni Telegram'ning "pastga tortib
    // yopish/kichraytirish" imo-ishorasi bilan aralashtirmasligi uchun.
    tg.disableVerticalSwipes?.();
  }, []);

  return null;
}
