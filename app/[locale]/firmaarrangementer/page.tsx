'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { StructuredData } from '@/components/structured-data';
import { ServiceSchema } from '@/lib/structured-data';
import { Users, Sparkles, Zap, Target, Trophy, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';

export default function CorporateEventsPage() {
  const locale = useLocale();
  const t = useTranslations('corporateEventsPage');
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/wedding-connection.jpg';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="corporate-events-video-schema" />
      <StructuredData 
        schema={ServiceSchema(locale, {
          name: 'Magisk Underholdning til Firmaarrangementer',
          description: 'Professionel underholdning til firmaevents, konferencer, julefrokoster og networking events i Danmark',
          url: `https://tryllekenneth.dk/${locale}/firmaarrangementer`,
          image: videoThumbnail,
        })}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base font-semibold h-14 px-8">
                  {t('bookButton')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-8">
                  {t('callButton')}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">{t('introTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            {t('introText')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[t('introFeature1'), t('introFeature2'), t('introFeature3')].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Video Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Se Magien i Aktion</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={videoThumbnail}
                alt="Magisk underholdning til firmaarrangement"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('benefitsTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
              {t('benefitsIntro')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover bg-white">
                <Sparkles className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('benefit1Title')}</h3>
                <p className="text-muted-foreground">{t('benefit1Desc')}</p>
              </Card>
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all magic-card-hover bg-white">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('benefit2Title')}</h3>
                <p className="text-muted-foreground">{t('benefit2Desc')}</p>
              </Card>
              <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/50 transition-all magic-card-hover bg-white">
                <Trophy className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('benefit3Title')}</h3>
                <p className="text-muted-foreground">{t('benefit3Desc')}</p>
              </Card>
              <Card className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover bg-white">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('benefit4Title')}</h3>
                <p className="text-muted-foreground">{t('benefit4Desc')}</p>
              </Card>
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/50 transition-all magic-card-hover bg-white">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{t('benefit5Title')}</h3>
                <p className="text-muted-foreground">{t('benefit5Desc')}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('eventTypesTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
              {t('eventTypesIntro')}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover bg-white">
                  <h3 className="text-xl font-bold mb-3 text-accent">{t(`eventType${i + 1}`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`eventType${i + 1}Desc`)}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('galleryTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center">{t('gallerySubtitle')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/wedding-connection.jpg"
                  alt="Firmaarrangement magisk underholdning"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/wedding-intimate-magic.jpg"
                  alt="Corporate magic performance"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="/wedding-refinement.jpg"
                  alt="Magisk underholdning event"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('testimonialsTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }, (_, i) => (
                <Card key={i} className="p-8 border-0 bg-white hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} className="text-accent">★</span>
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">&quot;{t(`testimonial${i + 1}Text`)}&quot;</p>
                  <div>
                    <p className="font-bold text-foreground">{t(`testimonial${i + 1}Name`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`testimonial${i + 1}Role`)}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('faqTitle')}</h2>
            <div className="space-y-6">
              {Array.from({ length: 5 }, (_, i) => (
                <Card key={i} className="p-8 border-0 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-4 text-accent">{t(`faqQ${i + 1}`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`faqA${i + 1}`)}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t('ctaTitle')}</h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base font-semibold h-14 px-8">
                  {t('ctaButton')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-8">
                  {t('ctaPhone')}
                </Button>
              </a>
              <a href="mailto:kenneth@tryllekenneth.dk">
                <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-8">
                  {t('ctaEmail')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
