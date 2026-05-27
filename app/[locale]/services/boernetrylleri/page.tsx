'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';
import { MagicalBackground } from '@/components/MagicalEffects';

export default function ChildrensMagic() {
  const locale = useLocale();
  const t = useTranslations();
  
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <MagicalBackground />
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold magical-heading magical-text mb-4 text-foreground">
              {t('childrensMagicPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('childrensMagicPage.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="btn-primary btn-lg">
                {t('childrensMagicPage.bookButton')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('childrensMagicPage.about')}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('childrensMagicPage.aboutText1')}
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('childrensMagicPage.aboutText2')}
              </p>
              <p className="text-muted-foreground whitespace-pre-line">
                {t('childrensMagicPage.aboutText3')}
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('childrensMagicPage.interactiveTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('childrensMagicPage.interactiveText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-accent/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Star className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('childrensMagicPage.laughsTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('childrensMagicPage.laughsText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Heart className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('childrensMagicPage.memoryTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('childrensMagicPage.memoryText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('childrensMagicPage.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 border border-primary/20 magic-card-hover">
                <Star className="text-primary mb-3" size={32} />
                <h3 className="font-bold mb-2">{t('childrensMagicPage.detailsTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('childrensMagicPage.detailsText')}</p>
              </Card>
              <Card className="p-6 border border-accent/20 magic-card-hover">
                <Sparkles className="text-accent mb-3" size={32} />
                <h3 className="font-bold mb-2">{t('childrensMagicPage.interactiveTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('childrensMagicPage.interactiveText')}</p>
              </Card>
              <Card className="p-6 border border-secondary/20 magic-card-hover">
                <Heart className="text-secondary mb-3" size={32} />
                <h3 className="font-bold mb-2">{t('childrensMagicPage.focusTitle')}</h3>
                <p className="text-sm text-muted-foreground">{t('childrensMagicPage.focusText')}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-accent to-secondary">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
            <p className="text-lg mb-8 text-slate-900">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {t('cta.bookButton')}
                </Button>
              </Link>
              <Link href={`tel:${t('footer.phone')}`}>
                <Button size="lg" className="btn-secondary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {t('cta.callKenneth')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Subtle transition gradient before footer */}
      <div className="h-16 bg-gradient-to-b from-purple-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

      <Footer />
    </>
  );
}
