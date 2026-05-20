'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import { VideoObjectSchema } from '@/lib/structured-data';

interface VideoSchemaProps {
  videoUrl: string;
  thumbnailUrl: string;
  videoId?: string;
}

/**
 * Injects VideoObject schema into the page head
 * Used on pages with video content for rich search results
 */
export function VideoSchema({ videoUrl, thumbnailUrl, videoId = 'video-schema' }: VideoSchemaProps) {
  const locale = useLocale();

  useEffect(() => {
    // Create and inject video schema into head
    const schema = VideoObjectSchema(locale, videoUrl, thumbnailUrl);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = videoId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(videoId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [locale, videoUrl, thumbnailUrl, videoId]);

  return null;
}
