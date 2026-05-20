'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export default function StandUpMagic() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {t('standUpMagicPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('standUpMagicPage.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base font-semibold h-14 px-8">
                {t('standUpMagicPage.bookButton')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('standUpMagicPage.about')}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('standUpMagicPage.aboutText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('standUpMagicPage.aboutText2')}
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-2 border-accent/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Zap className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.professionalTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.professionalText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-primary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.humorTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.humorText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-secondary-foreground mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.respectTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.respectText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('standUpMagicPage.adaptTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.cardsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.cardsText')}
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.coinsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.coinsText')}
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.objectsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.objectsText')}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Gallery - Clean Cinematic Layout */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{locale === 'da' ? 'Optræden på Scenen' : 'Stage Performances'}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{locale === 'da' ? 'Spektakulær stand-up magi fyldt med dramatik, humor og imponerende illusioner der fascinerer publikum' : 'Spectacular stand-up magic filled with drama, humor and stunning illusions that captivate audiences'}</p>
          </div>

          {/* Featured Large Image - Full Width */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 mb-12 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_27_15%20AM-MBK00G4m2ZbI61vtY46vHeI8xZy0ZU.png"
                alt="Kenneth performing stand-up comedy magic on stage"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Clean 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png"
                  alt="Kenneth in pirate costume performing themed comedy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_28_57%20AM-M1g6gMeHaNoj02b2nuP0m621igvvZY.png"
                  alt="Kenneth with large stage magic apparatus and props"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Final Wide Image */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_44_49%20AM-UMJLIfVVDcDujc57Mgy9Cm2yMKYkuU.png"
                alt="Kenneth performing magic with audience engagement"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'da' ? 'Klar til uforglemmelig magi?' : 'Ready for Unforgettable Magic?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {locale === 'da'
                ? 'Book TrylleKenneth til dit næste voksenarrangement eller fest'
                : 'Book TrylleKenneth for your next adult event or party'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white magic-button">
                  {locale === 'da' ? 'Book nu' : 'Book Now'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline" className="border-2 magic-button">
                  {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
