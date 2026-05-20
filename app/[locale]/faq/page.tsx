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
      question: t('faqPage.pricingQ1'),
      answer: t('faqPage.pricingA1'),
    },
    {
      question: t('faqPage.performanceQ1'),
      answer: t('faqPage.performanceA1'),
    },
    {
      question: t('faqPage.performanceQ2'),
      answer: t('faqPage.performanceA2'),
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
                  {locale === 'da' ? 'Kontakt mig' : 'Contact Me'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline" className="border-2">
                  {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
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
