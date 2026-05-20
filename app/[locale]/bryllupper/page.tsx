'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { StructuredData } from '@/components/structured-data';
import { ServiceSchema } from '@/lib/structured-data';
import { Heart, Sparkles, Users, Star, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WeddingPage() {
  const locale = useLocale();
  const t = useTranslations();
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13-270qN2OP2gez2uC7jEvcEzAJNz5r0O.jpeg';

  const weddingPhotos = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png',
      alt: 'Nærmagi ved bryllup',
      title: 'Intime Magiske Møder',
      desc: 'Hver guest får en personlig magisk oplevelse helt tæt på',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg',
      alt: 'Gæster forbundet gennem magik',
      title: 'Forbundethed',
      desc: 'Magik der naturligt samler mennesker i fælles undren',
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_27_15%20AM-MBK00G4m2ZbI61vtY46vHeI8xZy0ZU.png',
      alt: 'Elegance ved bordet',
      title: 'Raffinement',
      desc: 'Elegant underholdning der passer til ethvert bryllup',
    },
  ];

  const moments = [
    {
      icon: Heart,
      title: t('weddingPage.moment1'),
      desc: t('weddingPage.moment1Desc'),
    },
    {
      icon: Sparkles,
      title: t('weddingPage.moment2'),
      desc: t('weddingPage.moment2Desc'),
    },
    {
      icon: Users,
      title: t('weddingPage.moment3'),
      desc: t('weddingPage.moment3Desc'),
    },
    {
      icon: Star,
      title: t('weddingPage.moment4'),
      desc: t('weddingPage.moment4Desc'),
    },
  ];

  const placements = [
    {
      title: t('weddingPage.placement1'),
      desc: t('weddingPage.placement1Desc'),
    },
    {
      title: t('weddingPage.placement2'),
      desc: t('weddingPage.placement2Desc'),
    },
    {
      title: t('weddingPage.placement3'),
      desc: t('weddingPage.placement3Desc'),
    },
    {
      title: t('weddingPage.placement4'),
      desc: t('weddingPage.placement4Desc'),
    },
  ];

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="wedding-video-schema" />
      <StructuredData 
        schema={ServiceSchema(locale, {
          name: 'Nærmagi til Bryllup',
          description: 'Elegant nærmagi underholdning til brylluppet - intime magiske øjeblikke der forbinder gæster',
          url: `https://tryllekenneth.dk/${locale}/bryllupper`,
          image: videoThumbnail,
        })}
      />
      <main className="min-h-screen">
        {/* Hero Section - Luxury Scandinavian */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center space-y-6">
              <Heart className="w-12 h-12 mx-auto text-accent opacity-60" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-tight">
                {t('weddingPage.heroTitle')}
              </h1>
              <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                {t('weddingPage.heroSubtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="rounded-full px-8 font-light">
                    {t('weddingPage.bookButton')}
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full px-8 font-light" asChild>
                  <a href="tel:+4540852728">{t('weddingPage.callButton')}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-4 text-foreground">
              {t('weddingPage.introTitle')}
            </h2>
            <p className="text-lg text-muted-foreground text-center font-light leading-relaxed mb-12">
              {t('weddingPage.introText')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                t('weddingPage.introFeature1'),
                t('weddingPage.introFeature2'),
                t('weddingPage.introFeature3'),
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-foreground font-light">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Elegant Cards */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-16 text-foreground">
              {t('weddingPage.benefitsTitle')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: t('weddingPage.benefit1Title'), desc: t('weddingPage.benefit1Desc') },
                { title: t('weddingPage.benefit2Title'), desc: t('weddingPage.benefit2Desc') },
                { title: t('weddingPage.benefit3Title'), desc: t('weddingPage.benefit3Desc') },
                { title: t('weddingPage.benefit4Title'), desc: t('weddingPage.benefit4Desc') },
                { title: t('weddingPage.benefit5Title'), desc: t('weddingPage.benefit5Desc') },
              ].map((benefit, idx) => (
                <Card key={idx} className="p-6 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Photos Gallery */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-6 text-foreground">
              {t('weddingPage.momentTitle')}
            </h2>
            <p className="text-lg text-muted-foreground text-center font-light mb-16 max-w-2xl mx-auto">
              {t('weddingPage.momentIntro')}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {moments.map((moment, idx) => {
                const Icon = moment.icon;
                return (
                  <div key={idx} className="group">
                    <div className="relative mb-4 p-8 rounded-lg bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border/20 group-hover:border-primary/30 transition-all">
                      <Icon className="w-8 h-8 text-accent mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">{moment.title}</h3>
                      <p className="text-muted-foreground font-light text-sm">{moment.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gallery Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {weddingPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg aspect-video bg-muted"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white font-medium text-sm">{photo.title}</p>
                      <p className="text-white/80 text-xs font-light">{photo.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-16 text-foreground">
              {t('weddingPage.placementTitle')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {placements.map((placement, idx) => (
                <div key={idx} className="relative pl-8 py-6 border-l-2 border-accent/30 hover:border-accent/60 transition-colors">
                  <div className="absolute -left-3 top-8 w-4 h-4 rounded-full bg-accent/40 border-2 border-white"></div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{placement.title}</h3>
                  <p className="text-muted-foreground font-light">{placement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-16 text-foreground">
              {t('weddingPage.testimonialTitle')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: t('weddingPage.testimonial1Name'),
                  role: t('weddingPage.testimonial1Role'),
                  text: t('weddingPage.testimonial1Text'),
                },
                {
                  name: t('weddingPage.testimonial2Name'),
                  role: t('weddingPage.testimonial2Role'),
                  text: t('weddingPage.testimonial2Text'),
                },
                {
                  name: t('weddingPage.testimonial3Name'),
                  role: t('weddingPage.testimonial3Role'),
                  text: t('weddingPage.testimonial3Text'),
                },
              ].map((testimonial, idx) => (
                <Card key={idx} className="p-6 border border-border/30 bg-white/50">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-light mb-6 leading-relaxed italic">
                    {testimonial.text}
                  </p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-light">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-16 text-foreground">
              {t('weddingPage.faqTitle')}
            </h2>
            
            <div className="space-y-6">
              {[
                { q: t('weddingPage.faqQ1'), a: t('weddingPage.faqA1') },
                { q: t('weddingPage.faqQ2'), a: t('weddingPage.faqA2') },
                { q: t('weddingPage.faqQ3'), a: t('weddingPage.faqA3') },
                { q: t('weddingPage.faqQ4'), a: t('weddingPage.faqA4') },
                { q: t('weddingPage.faqQ5'), a: t('weddingPage.faqA5') },
              ].map((item, idx) => (
                <div key={idx} className="pb-6 border-b border-border/30 last:border-0">
                  <h3 className="text-lg font-medium text-foreground mb-3">{item.q}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10 text-center space-y-8">
            <Heart className="w-12 h-12 mx-auto text-accent opacity-60" />
            <h2 className="text-4xl sm:text-5xl font-light text-foreground leading-tight">
              {t('weddingPage.ctaTitle')}
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              {t('weddingPage.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="rounded-full px-8">
                  {t('weddingPage.ctaButton')}
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="tel:+4540852728">
                  <Phone className="w-4 h-4 mr-2" />
                  {t('weddingPage.ctaPhone')}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="mailto:kenneth@tryllekenneth.dk">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('weddingPage.ctaEmail')}
                </a>
              </Button>
            </div>

            <p className="text-muted-foreground font-light italic pt-6">
              {t('weddingPage.ctaFinal')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
