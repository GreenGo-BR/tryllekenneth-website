import { useTranslations } from 'next-intl'
import { Star } from 'lucide-react'

interface ReviewHighlightProps {
  variant?: 'inline' | 'card' | 'footer'
  className?: string
}

export function ReviewHighlight({ variant = 'inline', className = '' }: ReviewHighlightProps) {
  const t = useTranslations()

  const trustText = t('reviews.trustedAcross') || 'Trusted across Denmark and worldwide'
  const ratingText = t('reviews.rating') || '4.9/5 from 50+ verified reviews'

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 text-sm text-slate-600 ${className}`}>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-xs font-medium">{ratingText}</span>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={`bg-amber-50 border border-amber-100 rounded-lg p-4 text-center ${className}`}>
        <div className="flex justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-sm font-medium text-slate-900">{ratingText}</p>
        <p className="text-xs text-slate-600 mt-1">{trustText}</p>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={`text-center py-2 ${className}`}>
        <div className="flex justify-center gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-xs text-slate-600">{trustText}</p>
      </div>
    )
  }

  return null
}
