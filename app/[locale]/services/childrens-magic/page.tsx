'use client';

import { useLocale } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Smile, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ChildrensMagicPage() {
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-purple-900/5 to-sky-900/5 z-0"></div>
          
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-pink-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-purple-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-sky-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-200/30 rounded-full">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-700">{locale === 'da' ? 'For Børn' : 'For Children'}</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
              {locale === 'da' ? 'Børnetrylleri der Fascinerer' : 'Children\'s Magic That Amazes'}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {locale === 'da'
                ? 'Magisk underholdning der bringer glæde, latter og forundring til børn i alle aldre. Perfekt til fødselsdage, familiebegivenheder og særlige lejligheder.'
                : 'Magical entertainment that brings joy, laughter and wonder to children of all ages. Perfect for birthdays, family events and special occasions.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  {locale === 'da' ? 'Book Børnetrylleri' : 'Book Children\'s Magic'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            {locale === 'da' ? 'Magisk Underholdning for Børn' : 'Magical Entertainment for Children'}
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-12">
            <p>
              {locale === 'da'
                ? 'Kenneth specialiserer sig i at skabe magiske oplevelser specielt designet til børn. Med mere end 15 års erfaring ved Kenneth præcis hvordan man holder børns interesse, får dem til at le og skaber minder for livet.'
                : 'Kenneth specializes in creating magical experiences designed specifically for children. With over 15 years of experience, Kenneth knows exactly how to hold children\'s interest, get them laughing and create lifelong memories.'}
            </p>
            <p>
              {locale === 'da'
                ? 'Fra korttrylleri til usynlige mønter, Kenneth bringer klassisk børnetrylleri til live på en måde der fascinerer hvert barn i rummet.'
                : 'From card tricks to vanishing coins, Kenneth brings classic children\'s magic to life in a way that fascinates every child in the room.'}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-pink-200/50 bg-pink-50/30">
              <Heart className="w-6 h-6 text-pink-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {locale === 'da' ? 'Glæde og Latter' : 'Joy and Laughter'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Børn elsker magi. Kenneth udfører trylleri der får børn til at le, undre sig og dele glæde med deres venner.'
                  : 'Children love magic. Kenneth performs tricks that get kids laughing, amazed and sharing wonder with their friends.'}
              </p>
            </Card>

            <Card className="p-6 border-purple-200/50 bg-purple-50/30">
              <Smile className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {locale === 'da' ? 'Fokus og Fascination' : 'Focus and Fascination'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Magi holder børns opmærksomhed. Der er ingen skærmtid, ingen distraktion - bare ren magisk underholdning.'
                  : 'Magic holds children\'s attention. No screens, no distractions - just pure magical entertainment.'}
              </p>
            </Card>

            <Card className="p-6 border-sky-200/50 bg-sky-50/30">
              <Sparkles className="w-6 h-6 text-sky-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {locale === 'da' ? 'Mindeværdige Momenter' : 'Memorable Moments'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Børn husker magi. Disse øjeblikke bliver deres favorit minder fra fødselsdagen eller begivenheden.'
                  : 'Children remember magic. These moments become their favorite memories from the birthday or event.'}
              </p>
            </Card>

            <Card className="p-6 border-rose-200/50 bg-rose-50/30">
              <Heart className="w-6 h-6 text-rose-600 mb-3" />
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {locale === 'da' ? 'Sikker og Sjov' : 'Safe and Fun'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Kenneth er professionel, venlig og sætter fokus på sikkerhed. Børn elsker hans varme og energi.'
                  : 'Kenneth is professional, friendly and safety-focused. Children love his warmth and energy.'}
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            {locale === 'da' ? 'Klar til Børnetrylleri?' : 'Ready for Children\'s Magic?'}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {locale === 'da'
              ? 'Kontakt Kenneth i dag for at booke magisk underholdning til dit næste event eller fødselsdag.'
              : 'Contact Kenneth today to book magical entertainment for your next event or birthday.'}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
              {locale === 'da' ? 'Book Børnetrylleri' : 'Book Children\'s Magic'}
            </Button>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
