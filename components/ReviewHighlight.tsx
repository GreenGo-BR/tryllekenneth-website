import { useTranslations } from 'next-intl'
import { Star } from 'lucide-react'

interface ReviewHighlightProps {
  className?: string
}

export function ReviewHighlight({ className = '' }: ReviewHighlightProps) {
  const t = useTranslations()

  const ratingText = t('reviews.rating') || '4.9/5 from 50+ verified reviews'

  return (
    <div className={`flex items-center justify-center gap-3 text-sm text-slate-600 ${className}`}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-xs font-medium tracking-tight">{ratingText}</span>
    </div>
  )
}
