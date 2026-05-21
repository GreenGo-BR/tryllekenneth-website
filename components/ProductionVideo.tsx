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
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // IntersectionObserver for lazy loading - triggers autoplay when visible
  useEffect(() => {
    if (!lazy || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, isVisible]);

  // Handle autoplay attempt
  useEffect(() => {
    if (!isVisible || !videoRef.current || !autoPlay) return;

    const attemptAutoplay = async () => {
      try {
        // Set muted before attempting autoplay (required for autoplay policy)
        videoRef.current!.muted = muted;
        await videoRef.current!.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
        setHasError(false);
      } catch (err) {
        // Autoplay was blocked - show fallback button
        console.log('[v0] Autoplay blocked, showing manual play button');
        setAutoplayBlocked(true);
        setIsPlaying(false);
      }
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(attemptAutoplay, 100);
    return () => clearTimeout(timer);
  }, [isVisible, autoPlay, muted]);

  // Handle manual play click
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch(err => {
        console.error('[v0] Video playback failed:', err);
        setHasError(true);
      });
    }
  };

  const handleCanPlay = () => {
    setIsPlaying(true);
    setHasError(false);
  };

  const handleError = () => {
    setIsPlaying(false);
    setHasError(true);
    console.error('[v0] Video failed to load:', src);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleSoundToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      if (onSoundToggle) {
        onSoundToggle(videoRef.current.muted);
      }
    }
  };

  // Use provided poster or generate a fallback
  const defaultPoster = poster || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 9%22%3E%3Crect fill=%22%23000%22 width=%2216%22 height=%229%22/%3E%3C/svg%3E';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black group ${containerClassName}`}
      style={{ aspectRatio }}
      data-video-container={videoId}
    >
      {/* Poster Image - Always visible until video plays */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url(${defaultPoster})`,
            backgroundSize: 'cover',
          }}
        />
      )}

      {/* Video Element - Mounted when visible */}
      {isVisible && (
        <video
          ref={videoRef}
          id={videoId}
          className={`w-full h-full display-block ${className}`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          poster={defaultPoster}
          onCanPlay={handleCanPlay}
          onError={handleError}
          onPlay={handlePlay}
          onPause={handlePause}
          aria-label="Premium performance video"
          webkit-playsinline="true"
        >
          <source src={src} type="video/mp4" />
          <p className="text-white text-center p-4">
            Your browser does not support the video tag.
          </p>
        </video>
      )}

      {/* Play Button Overlay - Show when autoplay is blocked */}
      {autoplayBlocked && !isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 z-20 group cursor-pointer"
          aria-label="Play video"
          type="button"
        >
          <div className="flex flex-col items-center gap-3 pointer-events-none group-hover:scale-110 transition-transform duration-300">
            {/* Play Icon */}
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-slate-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
              Click to play
            </span>
          </div>
        </button>
      )}

      {/* Error state */}
      {hasError && !isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black flex items-center justify-center z-30">
          <div className="flex flex-col items-center gap-3 text-center px-4">
            <div className="text-4xl">🎬</div>
            <p className="text-slate-300 text-sm font-medium">Video unavailable</p>
            <p className="text-slate-500 text-xs">Please try refreshing</p>
            <button
              onClick={() => {
                setHasError(false);
                setAutoplayBlocked(false);
                if (videoRef.current) {
                  videoRef.current.load();
                  handlePlayClick();
                }
              }}
              className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
