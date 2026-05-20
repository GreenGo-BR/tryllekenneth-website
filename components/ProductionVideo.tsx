'use client';

import { useState, useEffect, useRef } from 'react';

interface ProductionVideoProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  lazy?: boolean;
  videoId?: string;
  onSoundToggle?: (isMuted: boolean) => void;
}

export function ProductionVideo({
  src,
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = 'metadata',
  className = '',
  containerClassName = '',
  aspectRatio = '16/9',
  lazy = true,
  videoId,
  onSoundToggle,
}: ProductionVideoProps) {
  const [isVisible, setIsVisible] = useState(!lazy);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isVisible]);

  const handleCanPlay = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error('[v0] Video failed to load:', src);
  };

  const handleSoundToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      if (onSoundToggle) {
        onSoundToggle(videoRef.current.muted);
      }
    }
  };

  // Fallback poster image
  const defaultPoster = poster || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 9%22%3E%3Crect fill=%22%23000%22 width=%2216%22 height=%229%22/%3E%3C/svg%3E';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ aspectRatio }}
      data-video-container={videoId}
    >
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 border-4 border-slate-700 border-t-indigo-500 rounded-full animate-spin"></div>
            <p className="text-slate-400 text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <div className="text-4xl">🎬</div>
            <p className="text-slate-300 text-sm font-medium">Video unavailable</p>
            <p className="text-slate-500 text-xs">Please try refreshing or check back later</p>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                if (videoRef.current) {
                  videoRef.current.load();
                }
              }}
              className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Video Element - Only render when visible (lazy loading) */}
      {isVisible && (
        <video
          ref={videoRef}
          id={videoId}
          className={`w-full h-full display-block bg-black ${className}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={defaultPoster}
          onCanPlay={handleCanPlay}
          onError={handleError}
          // Accessibility
          aria-label="Premium performance video"
          // Performance
          webkit-playsinline="true"
        >
          <source src={src} type="video/mp4" />
          {/* Fallback message for very old browsers */}
          <p className="text-white text-center p-4">
            Your browser does not support the video tag. Please use a modern browser like Chrome, Safari, Firefox, or Edge.
          </p>
        </video>
      )}

      {/* Lazy loading placeholder */}
      {!isVisible && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🎭</div>
            <p className="text-slate-500 text-sm">Video will load when you scroll here</p>
          </div>
        </div>
      )}
    </div>
  );
}
