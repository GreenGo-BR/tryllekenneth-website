'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ReviewHighlight } from '@/components/ReviewHighlight';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { VideoSchema } from '@/components/video-schema';
import { Heart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

export default function WeddingPage() {
  const locale = useLocale();
  const t = useTranslations();
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-wedding-rainbow.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="wedding-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Weddings */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
          {/* Romantic rose/gold gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 via-pink-900/5 to-amber-950/5 z-0"></div>
          
          {/* Floating premium particles - romantic, elegant */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-rose-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-pink-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-amber-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="relative z-20">
                <h1 className="text-5xl sm:text-6xl font-bold magical-heading magical-text mb-6 text-foreground">
                  {locale === 'da' ? 'Bryllupper' : 'Weddings'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Premium trylleri til dit specielle bryllupssejr'
                    : 'Premium magic for your special wedding day'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Elegant og romantisk underholdning med nærmagi til bryllupsfester, receptioner og festkvelder der gør dagen uforglemmelig'
                    : 'Elegant and romantic entertainment with close-up magic for wedding celebrations, receptions and evening parties that make the day unforgettable'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Book Bryllupstrylleri' : 'Book Wedding Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Wedding Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - romantic theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-rose-200/30 group-hover:border-rose-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Wedding Image */}
                  <img 
                    src="/kenneth-wedding-rainbow.png"
                    alt="Kenneth performing magic at wedding reception"
                    className="w-full h-auto object-cover object-top"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 70, 108, 0.15), inset 0 0 100px rgba(236, 72, 153, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-rose-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Romantisk • Elegant • Bryllup' : 'Premium Romantic • Elegant • Wedding'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-rose-200/30">
              <img 
                src="/kenneth-wedding-rainbow.png"
                alt="Kenneth performing magic at wedding reception"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground magical-heading magical-text">
                {locale === 'da' ? 'Romantisk Underholdning' : 'Romantic Entertainment'}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth tilbyder elegant og romantisk trylleunderholtning specielt designet til bryllupsfester og receptioner.'
                  : 'TrylleKenneth offers elegant and romantic magic entertainment specifically designed for wedding celebrations and receptions.'
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Nærmagi som mingler med dine gæster skaber magiske øjeblikke og skaber taler og grin der gør dagen helt speciel.'
                  : 'Close-up magic that mingles with your guests creates magical moments and sparks conversations that make the day truly special.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Romantic Card */}
              <Card className="p-6 rounded-2xl border-2 border-rose-200/40 hover:border-rose-300/60 transition-all hover:shadow-lg hover:shadow-rose-200/40 magic-card-hover bg-gradient-to-br from-rose-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Heart className="text-rose-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Romantisk' : 'Romantic'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Elegant og intime tryllernumre der passer til bryllupsfeste stemning' : 'Elegant and intimate magic acts that fit the wedding celebration atmosphere'}</p>
                  </div>
                </div>
              </Card>

              {/* Intimate Card */}
              <Card className="p-6 rounded-2xl border-2 border-pink-200/40 hover:border-pink-300/60 transition-all hover:shadow-lg hover:shadow-pink-200/40 magic-card-hover bg-gradient-to-br from-pink-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Users className="text-pink-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Intime Øjeblikke' : 'Intimate Moments'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Nærmagi der skaber mindeværdige øjeblikke med dine gæster' : 'Close-up magic that creates memorable moments with your guests'}</p>
                  </div>
                </div>
              </Card>

              {/* Memorable Card */}
              <Card className="p-6 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 transition-all hover:shadow-lg hover:shadow-amber-200/40 magic-card-hover bg-gradient-to-br from-amber-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Uforglemmelig' : 'Unforgettable'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Trylleri der gør din bryllupsbindelse helt magisk og speciel' : 'Magic that makes your wedding day completely magical and special'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-rose-600 via-pink-500 to-amber-600 relative overflow-hidden">
          {/* Romantic background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {locale === 'da' ? 'Magisk Bryllupsbilling' : 'Magical Wedding Day'}
            </h2>
            <p className="text-lg text-slate-900 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til din bryllupsfest og skab magiske øjeblikke der varer hele livet'
                : 'Book TrylleKenneth for your wedding reception and create magical moments that last a lifetime'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Book Bryllupstrylleri' : 'Book Wedding Magic'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="btn-secondary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                </Button>
              </a>
            </div>
            
            {/* Removed trust badges - kept only in footer */}
          </div>
        </section>

        {/* Subtle transition gradient before footer */}
        <div className="h-16 bg-gradient-to-b from-rose-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        {/* Service Details Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-slate-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {locale === 'da' ? 'Bryllupstrylleri - Ydelser' : 'Wedding Magic Services'}
          </h2>
          
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-l-rose-600 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {locale === 'da' ? 'Nærmagi ved Bordene' : 'Close-up Magic at Tables'}
              </h3>
              <p className="text-slate-700 mb-4">
                {locale === 'da' 
                  ? 'Kenneth optræder med elegant nærmagi ved bordene under maden. Kort, mønter og genstande forsvinder og dukker op på magisk vis. En intime oplevelse der skaber samvær og latter blandt gæsterne.'
                  : 'Kenneth performs elegant close-up magic at your tables during the reception. Cards, coins and objects disappear and reappear magically. An intimate experience that creates connection and laughter among your guests.'
                }
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2"><span className="text-rose-600">✓</span> {locale === 'da' ? 'Varighed: 1-3 timer' : 'Duration: 1-3 hours'}</span>
                <span className="flex items-center gap-2"><span className="text-rose-600">✓</span> {locale === 'da' ? 'Fleksibel timing' : 'Flexible timing'}</span>
                <span className="flex items-center gap-2"><span className="text-rose-600">✓</span> {locale === 'da' ? 'Alle gæster involveret' : 'All guests involved'}</span>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-pink-600 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {locale === 'da' ? 'Scene Show' : 'Stage Performance'}
              </h3>
              <p className="text-slate-700 mb-4">
                {locale === 'da'
                  ? 'Et elegant og fascinerende sceneshow under festen eller om aftenen. Publikumsinteraktion, humor og ren magi der holder hele salen fascineret. Perfekt til at skabe en mindeværdig højdepunkt på brylluppet.'
                  : 'An elegant and fascinating stage show during the celebration or evening. Audience interaction, humor and pure magic that fascinates the entire room. Perfect for creating a memorable highlight at your wedding.'
                }
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2"><span className="text-pink-600">✓</span> {locale === 'da' ? 'Varighed: 20-30 minutter' : 'Duration: 20-30 minutes'}</span>
                <span className="flex items-center gap-2"><span className="text-pink-600">✓</span> {locale === 'da' ? 'Publikumsdeltagelse' : 'Audience participation'}</span>
                <span className="flex items-center gap-2"><span className="text-pink-600">✓</span> {locale === 'da' ? 'Professionelt setup' : 'Professional setup'}</span>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-amber-600 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {locale === 'da' ? 'Kombineret Pakke' : 'Combined Package'}
              </h3>
              <p className="text-slate-700 mb-4">
                {locale === 'da'
                  ? 'Kombiner nærmagi ved bordene med et scene show senere på aftenen. Få det bedste af begge verdener - intime magiske øjeblikke blandet med et spektakulært show der binder dagen sammen.'
                  : 'Combine close-up magic at tables with a stage show later in the evening. Get the best of both worlds - intimate magical moments mixed with a spectacular show that ties the day together.'
                }
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2"><span className="text-amber-600">✓</span> {locale === 'da' ? 'Fuldt trylleprogram' : 'Complete magic program'}</span>
                <span className="flex items-center gap-2"><span className="text-amber-600">✓</span> {locale === 'da' ? 'Maksimal effekt' : 'Maximum impact'}</span>
                <span className="flex items-center gap-2"><span className="text-amber-600">✓</span> {locale === 'da' ? 'Prisvenlig' : 'Best value'}</span>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {locale === 'da' ? 'Ofte Stillede Spørgsmål' : 'Frequently Asked Questions'}
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da' 
                  ? 'Hvor længe varer bryllupstrylleri?'
                  : 'How long does wedding magic last?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Nærmagi ved bordene kan køre 1-3 timer efter dine ønsker. Scene shows er typisk 20-30 minutter. Kenneth tilpasser timingen helt til dit program og brylluppets flow.'
                  : 'Close-up magic at tables can run 1-3 hours based on your wishes. Stage shows are typically 20-30 minutes. Kenneth tailors the timing completely to your program and wedding flow.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Kan trylleri planlægges til specifikke tidspunkter?'
                  : 'Can magic be scheduled for specific times?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Ja! Kenneth koordinerer med dig om hvornår trylleri skal foregå - under maden, efter taler, under dans, eller præcis når det passer bedst i dit program. Du bestemmer helt timingen.'
                  : 'Yes! Kenneth coordinates with you about when magic should happen - during dinner, after speeches, during dancing, or exactly when it fits best in your program. You have complete control of timing.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Hvad hvis nogle gæster har set trylleri før?'
                  : 'What if some guests have seen magic before?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Trylleri virker for alle uanset erfaring. Kenneth udfører klassisk trylleri der fascinerer selv magic-entusiaster. Gåden ligger i dygtigheden og presentationen, ikke overraskelses-effekten.'
                  : 'Magic works for everyone regardless of experience. Kenneth performs classic magic that fascinates even magic enthusiasts. The wonder comes from skill and presentation, not surprise alone.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Kan Kenneth optræde ved udendørs bryllup?'
                  : 'Can Kenneth perform at outdoor weddings?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Ja, Kenneth optræder ved både indendørs og udendørs bryllupsfester. Nærmagi virker vidunderligt udendørs, og scene shows kan arrangeres med passende setup.'
                  : 'Yes, Kenneth performs at both indoor and outdoor wedding receptions. Close-up magic works beautifully outdoors, and stage performances can be arranged with proper setup.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Hvor langt i forvejen skal jeg booke?'
                  : 'How far in advance should I book?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Vi anbefaler at booke 2-4 måneder før brylluppet for at sikre tilgængelighed. Men kontakt Kenneth gerne med kort tidsfrist - han gør sit bedste for at accommodere tidligere bookinger. Jo før, jo bedre!'
                  : 'We recommend booking 2-4 months in advance to ensure availability. But feel free to contact Kenneth on shorter notice - he will do his best to accommodate earlier bookings. The sooner, the better!'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Hvilke tryllernumre kan Kenneth lave?'
                  : 'What magic tricks can Kenneth perform?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Kenneth specialiserer sig i kort-trylleri, mønts-trylleri og genstands-manipulering. Alt bruger almindelige objekter eller gæsternes egne ting - der skabes ægte forbløffelse. Hver optræden tilpasses til dine ønsker og brylluppets tema.'
                  : 'Kenneth specializes in card tricks, coin magic and object manipulation. Everything uses everyday objects or guests\' own items - creating genuine amazement. Each performance is tailored to your wishes and wedding theme.'
                }
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7">
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700 py-4">
                {locale === 'da'
                  ? 'Er der ekstra udgifter for rejse eller setup?'
                  : 'Are there extra costs for travel or setup?'
                }
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4">
                {locale === 'da'
                  ? 'Kenneth rejser til hele Danmark. Rejseomkostninger kan variere afhængig af lokation. Setup er normalt inkluderet i tilbuddet. Alt diskuteres og aftales når du kontakter Kenneth.'
                  : 'Kenneth travels throughout Denmark. Travel costs may vary depending on location. Setup is normally included in the quote. Everything is discussed and arranged when you contact Kenneth.'
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Subtle Trust Strip */}
        <div className="border-t border-b border-slate-200/50 bg-slate-50/30 backdrop-blur-sm">
          <section className="py-3 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                {t('reviews.verified') || 'Verified'}
              </p>
              <div className="hidden sm:block w-px h-6 bg-slate-200/50"></div>
              <ReviewHighlight />
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            {locale === 'da' ? 'Klar til trylleri?' : 'Ready for magic?'}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {locale === 'da'
              ? 'Kontakt Kenneth i dag for at diskutere hvordan trylleri kan gøre din bryllupsbilling endnu mere magisk og uforglemmelig.'
              : 'Contact Kenneth today to discuss how magic can make your wedding day even more magical and unforgettable.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                {locale === 'da' ? 'Book Bryllupstrylleri' : 'Book Wedding Magic'}
              </Button>
            </Link>
            <a href="tel:+4540852728">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
              </Button>
            </a>
          </div>
        </section>

        {/* Subtle transition gradient before footer */}
        <div className="h-16 bg-gradient-to-b from-rose-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        <Footer />
      </main>
    </>
  );
}
