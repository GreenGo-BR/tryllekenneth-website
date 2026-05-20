'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { triggerCelebration } from '@/lib/animations';

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guests: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    triggerCelebration();
    alert(t('contactPage.responseMessage'));
    setFormData({ name: '', email: '', phone: '', eventDate: '', eventType: '', guests: '', message: '' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {t('contactPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 rounded-2xl border-2 border-primary/20 text-center hover:border-primary/50 transition-all magic-card-hover">
              <div className="flex justify-center mb-4">
                <Phone className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('contactPage.phoneCardLabel')}</h3>
              <a href="tel:+4540852728" className="text-muted-foreground hover:text-primary transition-colors">
                40 85 27 28
              </a>
            </Card>

            <Card className="p-8 rounded-2xl border-2 border-secondary/20 text-center hover:border-secondary/50 transition-all magic-card-hover">
              <div className="flex justify-center mb-4">
                <Mail className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('contactPage.emailCardLabel')}</h3>
              <a href="mailto:kenneth@tryllekenneth.dk" className="text-muted-foreground hover:text-secondary transition-colors">
                kenneth@tryllekenneth.dk
              </a>
            </Card>

            <Card className="p-8 rounded-2xl border-2 border-accent/20 text-center hover:border-accent/50 transition-all magic-card-hover">
              <div className="flex justify-center mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('contactPage.availabilityLabel')}</h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {t('contactPage.availabilityTime')}
              </p>
            </Card>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">{t('contactPage.formTitle')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.nameLabel')} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="Dit navn"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.emailLabel')} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.phoneLabel')} *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.eventDateLabel')} *</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.eventTypeLabel')} *</label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                    >
                      <option value="">Select event type</option>
                      <option value="childrens-party">{t('contactPage.childrenBirthday')}</option>
                      <option value="adult-party">{t('contactPage.familyEvent')}</option>
                      <option value="corporate">{t('contactPage.corporateEvent')}</option>
                      <option value="close-up">{t('contactPage.closeUpOption')}</option>
                      <option value="santa">{t('contactPage.weddingEvent')}</option>
                      <option value="other">{t('contactPage.otherEvent')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.guestsLabel')} *</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary"
                      placeholder="Antal personer"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contactPage.messageLabel')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:outline-none focus:border-primary h-32 resize-none"
                      placeholder="Tell me about your event and any special requests..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold magic-button">
                    {t('contactPage.sendButton')}
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">{t('contactPage.importantInfoTitle')}</h2>
                <div className="space-y-6">
                  <Card className="p-6 rounded-2xl border-2 border-primary/20 magic-card-hover">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <MapPin size={20} className="text-primary" />
                      {t('contactPage.locationTitle')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contactPage.locationText')}
                    </p>
                  </Card>

                  <Card className="p-6 rounded-2xl border-2 border-secondary/20 magic-card-hover">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Clock size={20} className="text-secondary" />
                      {t('contactPage.bookingTimeTitle')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contactPage.bookingTimeText')}
                    </p>
                  </Card>

                  <Card className="p-6 rounded-2xl border-2 border-accent/20 magic-card-hover">
                    <h3 className="font-bold mb-2">{t('contactPage.whatsIncludedTitle')}</h3>
                    <ul className="text-muted-foreground space-y-2">
                      {t.raw('contactPage.whatIncludedItems').map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 magic-card-hover">
                    <h3 className="font-bold mb-2">{t('contactPage.needQuickResponseTitle')}</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('contactPage.needQuickResponseText')}
                    </p>
                    <a href="tel:+4540852728">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                        Call: 40 85 27 28
                      </Button>
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('contactPage.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('contactPage.ctaText')}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
