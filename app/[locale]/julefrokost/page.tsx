'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { StructuredData } from '@/components/structured-data';
import { ServiceSchema } from '@/lib/structured-data';
import { Sparkles, Users, Gift, Music, Star, Wand2, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ChristmasParty() {
  const locale = useLocale();
  const t = useTranslations('christmasPartyPage');
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png';

  const christmasPhotos = [
    {
      src: '/christmas-celebration.jpg',
      alt: 'Juleunderholdning ved firmajulefrokost',
      title: 'Festlig Stemning',
      desc: 'Medarbejdere i julemagi og latter',
    },
    {
      src: '/christmas-magic.jpg',
      alt: 'Magisk opvisning til julefesten',
      title: 'Julemagi Live',
      desc: 'Trylleri der skaber undren og glæde',
    },
    {
      src: '/christmas-gathering.jpg',
      alt: 'Gæster samlet til julemagi',
      title: 'Samlet i Glæde',
      desc: 'Magik der forbinder hele holdet',
    },
  ];

  const performanceOptions = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('performance1'),
      desc: t('performance1Desc'),
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: t('performance2'),
      desc: t('performance2Desc'),
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: t('performance3'),
      desc: t('performance3Desc'),
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('performance4'),
      desc: t('performance4Desc'),
    },
  ];

  const timingOptions = [
    {
      title: t('timing1'),
      desc: t('timing1Desc'),
    },
    {
      title: t('timing2'),
      desc: t('timing2Desc'),
    },
    {
      title: t('timing3'),
      desc: t('timing3Desc'),
    },
    {
      title: t('timing4'),
      desc: t('timing4Desc'),
    },
  ];

  const testimonials = [
    {
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      text: t('testimonial1Text'),
    },
    {
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      text: t('testimonial2Text'),
    },
    {
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      text: t('testimonial3Text'),
    },
  ];

  const faqs = [
    { q: t('faqQ1'), a: t('faqA1') },
    { q: t('faqQ2'), a: t('faqA2') },
    { q: t('faqQ3'), a: t('faqA3') },
    { q: t('faqQ4'), a: t('faqA4') },
    { q: t('faqQ5'), a: t('faqA5') },
  ];

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
        {/* Premium Festive Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/8 via-amber-900/8 to-green-950/8 z-0"></div>
          
          {/* Festive floating elements */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-red-200/6 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-green-200/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-amber-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full text-center space-y-8">
            <div className="inline-flex items-center justify-center space-x-2 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border/20">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{t('heroTitle')}</span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto font-light leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-base h-12 px-8 rounded-lg">
                {t('bookButton')}
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-lg">
                {t('callButton')}
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('introTitle')}</h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
                {t('introText')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[t('introFeature1'), t('introFeature2'), t('introFeature3')].map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="text-accent mt-1">•</div>
                  <p className="text-foreground/80 font-light">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('benefitsTitle')}</h2>
              <p className="text-lg text-foreground/70 font-light">{t('benefitsIntro')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: t('benefit1Title'), desc: t('benefit1Desc') },
                { title: t('benefit2Title'), desc: t('benefit2Desc') },
                { title: t('benefit3Title'), desc: t('benefit3Desc') },
                { title: t('benefit4Title'), desc: t('benefit4Desc') },
                { title: t('benefit5Title'), desc: t('benefit5Desc') },
              ].map((benefit, idx) => (
                <Card key={idx} className="p-6 border-border/40 bg-white/50 backdrop-blur hover:border-accent/50 transition-all duration-300">
                  <h3 className="font-light text-lg text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Options */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('performanceTitle')}</h2>
              <p className="text-lg text-foreground/70 font-light">{t('performanceIntro')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceOptions.map((option, idx) => (
                <Card key={idx} className="p-6 border-border/40 bg-gradient-to-br from-red-50/50 to-amber-50/50 backdrop-blur hover:from-red-50 hover:to-amber-50 transition-all duration-300">
                  <div className="text-accent mb-4">{option.icon}</div>
                  <h3 className="font-light text-lg text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm text-foreground/70 font-light">{option.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('galleryTitle')}</h2>
              <p className="text-lg text-foreground/70 font-light">{t('gallerySubtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {christmasPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="text-white text-center space-y-2">
                      <p className="text-lg font-light">{photo.title}</p>
                      <p className="text-sm text-white/80">{photo.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timing Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('timingTitle')}</h2>
            </div>

            <div className="space-y-4">
              {timingOptions.map((timing, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-6 p-6 border-l-4 border-accent/30 hover:border-accent/60 transition-colors duration-300 bg-gradient-to-r from-accent/5 to-transparent"
                >
                  <div className="text-2xl font-light text-accent min-w-fit">{idx + 1}.</div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-light text-foreground">{timing.title}</h3>
                    <p className="text-foreground/70 font-light">{timing.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('testimonialTitle')}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/40 bg-white/50 backdrop-blur">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 font-light leading-relaxed mb-6">{testimonial.text}</p>
                  <div className="pt-4 border-t border-border/20">
                    <p className="font-light text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60 font-light">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('faqTitle')}</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-border/40 pb-4">
                  <summary className="flex items-center justify-between cursor-pointer py-2">
                    <h3 className="font-light text-lg text-foreground group-open:text-accent transition-colors">
                      {faq.q}
                    </h3>
                    <Wand2 className="w-5 h-5 text-foreground/40 group-open:text-accent group-open:rotate-12 transition-all" />
                  </summary>
                  <p className="text-foreground/70 font-light leading-relaxed pt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-red-950/5 via-amber-900/5 to-green-950/5 rounded-2xl p-12">
            <Gift className="w-12 h-12 text-accent mx-auto" />
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-light text-foreground">{t('ctaTitle')}</h2>
              <p className="text-lg text-foreground/70 font-light">{t('ctaSubtitle')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-base h-12 px-8 rounded-lg">
                {t('ctaButton')}
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-lg">
                {t('ctaPhone')}
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-lg">
                {t('ctaEmail')}
              </Button>
            </div>

            <p className="text-foreground/60 font-light pt-6">{t('ctaFinal')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
