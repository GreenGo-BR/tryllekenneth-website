'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: {
        sitekey: string;
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
      }) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
  onToken: (token: string) => void;
  onError: () => void;
};

export function TurnstileWidget({ siteKey, onToken, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const renderWidget = () => {
      if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onToken,
        'expired-callback': onError,
        'error-callback': onError,
      });
    };

    renderWidget();
    window.addEventListener('turnstile-ready', renderWidget);
    return () => window.removeEventListener('turnstile-ready', renderWidget);
  }, [onError, onToken, siteKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-muted-foreground" role="status">
        Spam-beskyttelse er midlertidigt ikke konfigureret.
      </p>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => window.dispatchEvent(new Event('turnstile-ready'))}
      />
      <div ref={containerRef} aria-label="Spam protection" />
    </>
  );
}
