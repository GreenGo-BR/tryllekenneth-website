'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { StructuredData } from '@/components/structured-data';
import { ServiceSchema } from '@/lib/structured-data';
import { Gift, Sparkles, Users, Music, Star, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';

export default function ChristmasParty() {
  const locale = useLocale();
  const t = useTranslations('christmasPartyPage');
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="christmas-party-video-schema" />
      <StructuredData 
        schema={ServiceSchema(locale, {
          name: 'Juleunderholdning til Firmajulefrokost',
          description: 'Professionel underholdning til firmajulefrokost, julearrangementer og julebedriftssammenkomster i Danmark',
          url: `https://tryllekenneth.dk/${locale}/julefrokost`,
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
            <h2 className="text-4xl font-bold mb-12 text-center">Se Julemagi i Aktion</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={videoThumbnail}
                alt="Juleunderholdning"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Array.from({ length: 5 }, (_, i) => (
                <Card key={i} className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover bg-white">
                  <h3 className="text-lg font-bold mb-3 text-accent">{t(`benefit${i + 1}Title`)}</h3>
                  <p className="text-muted-foreground text-sm">{t(`benefit${i + 1}Desc`)}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('performanceTitle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }, (_, i) => (
                <Card key={i} className="p-8 border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover bg-white">
                  <h3 className="text-xl font-bold mb-3 text-accent">{t(`performance${i + 1}`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`performance${i + 1}Desc`)}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('timingTitle')}</h2>
            <div className="space-y-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-6 border-l-4 border-accent/30 hover:border-accent/60 transition-colors duration-300 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg"
                >
                  <div className="text-2xl font-bold text-accent min-w-fit">{i + 1}.</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{t(`timing${i + 1}`)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(`timing${i + 1}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('galleryTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-16 text-center">{t('gallerySubtitle')}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png"
                  alt="Juleunderholdning fest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg"
                  alt="Julemagi opvisning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13-270qN2OP2gez2uC7jEvcEzAJNz5r0O.jpeg"
                  alt="Gæster i julefest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">{t('testimonialTitle')}</h2>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
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
