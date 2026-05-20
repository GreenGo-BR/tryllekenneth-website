'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { StructuredData } from '@/components/structured-data';
import { ServiceSchema } from '@/lib/structured-data';
import { Sparkles, Users, Zap, Target, Trophy, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Note: Metadata is generated in layout.tsx for app directory support
// This is a client component, so metadata generation happens at a higher level

export default function CorporateEventsPage() {
  const locale = useLocale();
  const t = useTranslations('corporateEventsPage');
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_27_15%20AM-MBK00G4m2ZbI61vtY46vHeI8xZy0ZU.png';

  const benefits = [
    {
      title: t('benefit1Title'),
      description: t('benefit1Desc'),
      icon: Sparkles,
    },
    {
      title: t('benefit2Title'),
      description: t('benefit2Desc'),
      icon: Users,
    },
    {
      title: t('benefit3Title'),
      description: t('benefit3Desc'),
      icon: Trophy,
    },
    {
      title: t('benefit4Title'),
      description: t('benefit4Desc'),
      icon: Target,
    },
    {
      title: t('benefit5Title'),
      description: t('benefit5Desc'),
      icon: Zap,
    },
  ];

  const eventTypes = [
    {
      title: t('eventType1'),
      description: t('eventType1Desc'),
    },
    {
      title: t('eventType2'),
      description: t('eventType2Desc'),
    },
    {
      title: t('eventType3'),
      description: t('eventType3Desc'),
    },
    {
      title: t('eventType4'),
      description: t('eventType4Desc'),
    },
    {
      title: t('eventType5'),
      description: t('eventType5Desc'),
    },
    {
      title: t('eventType6'),
      description: t('eventType6Desc'),
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
    {
      q: t('faqQ1'),
      a: t('faqA1'),
    },
    {
      q: t('faqQ2'),
      a: t('faqA2'),
    },
    {
      q: t('faqQ3'),
      a: t('faqA3'),
    },
    {
      q: t('faqQ4'),
      a: t('faqA4'),
    },
    {
      q: t('faqQ5'),
      a: t('faqA5'),
    },
  ];

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
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">{t('introTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {t('introText')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[t('introFeature1'), t('introFeature2'), t('introFeature3')].map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('benefitsTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              {t('benefitsIntro')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <Card key={i} className="p-8 hover:shadow-lg transition-shadow border-0 bg-white">
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('eventTypesTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              {t('eventTypesIntro')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((eventType, i) => (
                <Card key={i} className="p-6 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-slate-50 to-slate-100">
                  <h3 className="text-lg font-bold mb-3 text-accent">{eventType.title}</h3>
                  <p className="text-muted-foreground">{eventType.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">{t('galleryTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">{t('gallerySubtitle')}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Performance images - using existing video thumbnails */}
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_27_15%20AM-MBK00G4m2ZbI61vtY46vHeI8xZy0ZU.png"
                  alt="Corporate event performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg"
                  alt="Corporate magic performance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13-270qN2OP2gez2uC7jEvcEzAJNz5r0O.jpeg"
                  alt="Event entertainment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('testimonialsTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="p-8 border-0 bg-gradient-to-br from-slate-50 to-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">&quot;{testimonial.text}&quot;</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t('faqTitle')}</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <Card key={i} className="p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg mb-3 text-accent flex items-start gap-3">
                    <span className="text-primary font-bold">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground flex items-start gap-3">
                    <span className="text-accent font-bold">A:</span>
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">{t('ctaTitle')}</h2>
            <p className="text-xl text-muted-foreground mb-8">
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
