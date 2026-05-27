'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function FAQ() {
  const locale = useLocale();
  const t = useTranslations();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faqPage.bookingQ1'),
      answer: t('faqPage.bookingA1'),
    },
    {
      question: t('faqPage.bookingQ2'),
      answer: t('faqPage.bookingA2'),
    },
    {
      question: t('faqPage.bookingQ3'),
      answer: t('faqPage.bookingA3'),
    },
    {
      question: t('faqPage.bookingQ4'),
      answer: t('faqPage.bookingA4'),
    },
    {
      question: t('faqPage.pricingQ1'),
      answer: t('faqPage.pricingA1'),
    },
    {
      question: t('faqPage.pricingQ2'),
      answer: t('faqPage.pricingA2'),
    },
    {
      question: t('faqPage.performanceQ1'),
      answer: t('faqPage.performanceA1'),
    },
    {
      question: t('faqPage.performanceQ2'),
      answer: t('faqPage.performanceA2'),
    },
    {
      question: t('faqPage.performanceQ3'),
      answer: t('faqPage.performanceA3'),
    },
    {
      question: t('faqPage.performanceQ4'),
      answer: t('faqPage.performanceA4'),
    },
    {
      question: t('faqPage.processQ1'),
      answer: t('faqPage.processA1'),
    },
    {
      question: t('faqPage.processQ2'),
      answer: t('faqPage.processA2'),
    },
    {
      question: t('faqPage.logisticsQ1'),
      answer: t('faqPage.logisticsA1'),
    },
    {
      question: t('faqPage.comparisonQ1'),
      answer: t('faqPage.comparisonA1'),
    },
    {
      question: t('faqPage.comparisonQ2'),
      answer: t('faqPage.comparisonA2'),
    },
    {
      question: t('faqPage.venueQ1'),
      answer: t('faqPage.venueA1'),
    },
    {
      question: t('faqPage.venueQ2'),
      answer: t('faqPage.venueA2'),
    },
    {
      question: t('faqPage.venueQ3'),
      answer: t('faqPage.venueA3'),
    },
    {
      question: t('faqPage.venueQ4'),
      answer: t('faqPage.venueA4'),
    },
    {
      question: t('faqPage.eventQ1'),
      answer: t('faqPage.eventA1'),
    },
    {
      question: t('faqPage.eventQ2'),
      answer: t('faqPage.eventA2'),
    },
    {
      question: t('faqPage.customizationQ1'),
      answer: t('faqPage.customizationA1'),
    },
    {
      question: t('faqPage.customizationQ2'),
      answer: t('faqPage.customizationA2'),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* FAQ Schema for AI Search Optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': faq.answer
                }
              }))
            })
          }}
        />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-foreground">
              {t('faqPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('faqPage.subtitle')}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="border-2 border-primary/20 overflow-hidden magic-card-hover">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`flex-shrink-0 text-primary transition-transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                
                {openIndex === idx && (
                  <div className="px-6 pb-6 pt-0 border-t border-primary/10">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-card">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'da' ? 'Kan du ikke finde dit spørgsmål?' : "Can't Find Your Question?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {locale === 'da' 
                ? 'Kontakt mig direkte for mere information'
                : 'Contact me directly for more information'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary btn-lg">
                  {locale === 'da' ? 'Kontakt mig' : 'Contact Me'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="btn-secondary btn-lg">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
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
