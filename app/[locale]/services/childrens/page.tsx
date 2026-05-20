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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
          <MagicalBackground />
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('childrensMagicPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('childrensMagicPage.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-base font-semibold h-14 px-8">
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
              <p className="text-muted-foreground leading-relaxed">
                {t('childrensMagicPage.aboutText2')}
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

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 text-center magic-card-hover">
              <div className="text-3xl mb-2">👶</div>
              <h3 className="font-bold mb-2">{t('childrensMagicPage.detailsTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('childrensMagicPage.detailsText')}</p>
            </Card>
            <Card className="p-6 text-center magic-card-hover">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-bold mb-2">{t('childrensMagicPage.focusTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('childrensMagicPage.focusText')}</p>
            </Card>
          </div>
        </section>

        {/* Children in Action - Clean Cinematic Gallery */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{locale === 'da' ? 'Børn i Aktion' : 'Children in Action'}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{locale === 'da' ? 'Autentiske øjeblikke af glæde, undren og magiske oplevelser der bliver tilbage for hele livet' : 'Authentic moments of joy, wonder and magical experiences that last a lifetime'}</p>
          </div>

          {/* Featured Large Image - Full Width */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 mb-12 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_34_15%20AM-uFrLxqdtG9SkMxgcePQK2lG9ViKb3p.png"
                alt="Kenneth performing family magic with children outdoors"
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_32_06%20AM-GZOkIhDLvNu6qjaryNbYSElYJkRCJx.png"
                  alt="Children enjoying outdoor magic show with joy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_16_21%20AM-QeJEuj4jXebk3G1AbI2UWIEw99s4y5.png"
                  alt="Interactive magic interaction with young audience member"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Final Wide Image */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg"
                alt="Close-up magic card performance for children"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                  {t('cta.bookShow')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline">
                  {t('cta.callKenneth')}
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
