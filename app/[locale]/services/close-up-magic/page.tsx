'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Coins, Wand2, Hand } from 'lucide-react';
import Link from 'next/link';

export default function CloseUpMagicPage() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-900">
              {locale === 'da' ? 'Nærmagi - Elegance i Nærheden' : 'Close-up Magic - Elegance Up Close'}
            </h1>
            <p className="text-xl text-slate-600 mb-12">
              {locale === 'da'
                ? 'Professionel kort- og mønttrylleri der fascinerer og underholder. Perfekt til events, middage og private lejligheder.'
                : 'Professional card and coin magic that fascinates and entertains. Perfect for events, dinners and private occasions.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/contact`}>
                <Button size="lg">
                  {locale === 'da' ? 'Book Nærmagi' : 'Book Close-up Magic'}
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
            {locale === 'da' ? 'Hvad er Nærmagi?' : 'What is Close-up Magic?'}
          </h2>
          
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              {locale === 'da'
                ? 'Nærmagi er kunstformen hvor magi udføres på kort afstand, ofte med almindelige genstande som kort, mønter eller andre objekter. Kenneth specialiserer sig i denne intim kunstform der skaber personlige, mindeværdige oplevelser.'
                : 'Close-up magic is the art form where magic is performed at close range, often with everyday objects like cards, coins or other items. Kenneth specializes in this intimate art form that creates personal, memorable experiences.'}
            </p>
            <p>
              {locale === 'da'
                ? 'Med over 15 års erfaring har Kenneth perfektioneret sin teknik til at skabe rent forbløffelse. Der er ingen skjulte skærme, ingen trylleformler - bare dygtighed, timing og kunstnerisk præsentation.'
                : 'With over 15 years of experience, Kenneth has perfected his technique to create pure amazement. There are no hidden screens, no magic words - just skill, timing and artistic presentation.'}
            </p>
          </div>
        </section>

        {/* Magic Types */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">
              {locale === 'da' ? 'Typer af Nærmagi' : 'Types of Close-up Magic'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-indigo-200/50 bg-indigo-50/30">
                <Coins className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {locale === 'da' ? 'Mønttrylleri' : 'Coin Magic'}
                </h3>
                <p className="text-slate-600">
                  {locale === 'da'
                    ? 'Mønter forsvinder, dukker op og ændrer sig på magisk vis. En klassisk kunstform der aldrig bliver gammel.'
                    : 'Coins vanish, appear and change magically. A classic art form that never gets old.'}
                </p>
              </Card>

              <Card className="p-6 border-purple-200/50 bg-purple-50/30">
                <Wand2 className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {locale === 'da' ? 'Korttrylleri' : 'Card Magic'}
                </h3>
                <p className="text-slate-600">
                  {locale === 'da'
                    ? 'Kenneth udfører imponerende korttrylleri hvor kortet du vælger altid er der - på magisk vis.'
                    : 'Kenneth performs impressive card magic where your selected card always appears - magically.'}
                </p>
              </Card>

              <Card className="p-6 border-violet-200/50 bg-violet-50/30">
                <Hand className="w-8 h-8 text-violet-600 mb-3" />
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {locale === 'da' ? 'Objektmanipulation' : 'Object Manipulation'}
                </h3>
                <p className="text-slate-600">
                  {locale === 'da'
                    ? 'Genstande forsvinder og dukker op. Ringe, tørklæder og hverdagsting bliver til magiske objekter.'
                    : 'Objects vanish and appear. Rings, scarves and everyday items become magical objects.'}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">
            {locale === 'da' ? 'Hvorfor Nærmagi?' : 'Why Close-up Magic?'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {locale === 'da' ? 'Personlig Forbindelse' : 'Personal Connection'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Nærmagi skabes med dine gæster tæt på. Det skaber intime øjeblikke og personlig interaktion.'
                  : 'Close-up magic happens with your guests up close. It creates intimate moments and personal interaction.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {locale === 'da' ? 'Elegant og Klassisk' : 'Elegant and Timeless'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Kunstformen er klassisk og elegant. Det passer til ethvert event fra formelle aftenslibéer til casual middage.'
                  : 'The art form is classic and elegant. It fits any event from formal galas to casual dinners.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {locale === 'da' ? 'Fascinerende for Alle' : 'Fascinating for Everyone'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Uanset alder eller erfaring fascinerer nærmagi alle mennesker. Der er noget magisk ved at se det umulige blive muligt.'
                  : 'Regardless of age or experience, close-up magic fascinates everyone. There\'s something magical about seeing the impossible become possible.'}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">
                {locale === 'da' ? 'Mindeværdige Øjeblikke' : 'Memorable Moments'}
              </h3>
              <p className="text-slate-600">
                {locale === 'da'
                  ? 'Gæsterne vil huske disse øjeblikke i årevis. Det bliver de historier de deler med deres venner.'
                  : 'Your guests will remember these moments for years. They become the stories they share with friends.'}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            {locale === 'da' ? 'Klar til Nærmagi?' : 'Ready for Close-up Magic?'}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {locale === 'da'
              ? 'Kontakt Kenneth for at diskutere hvordan nærmagi kan gøre dit event uforglemmelig.'
              : 'Contact Kenneth to discuss how close-up magic can make your event unforgettable.'}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg">
              {locale === 'da' ? 'Book Nærmagi' : 'Book Close-up Magic'}
            </Button>
          </Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
