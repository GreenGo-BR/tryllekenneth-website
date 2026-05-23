'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLocale, useTranslations } from 'next-intl';

export default function TermsAndConditions() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <article className="prose prose-sm max-w-none">
            {locale === 'da' ? (
              <>
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Vilkår og betingelser</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Om denne hjemmeside</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth er registreret som selvstændig erhvervsdrivende. Denne hjemmeside leverer information og booking-muligheder for magisk underholdning tilEvents og arrangementer i hele Danmark.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Booking og aftaler</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Booking af en performance via denne hjemmeside er bindende for begge parter. Booingen bekræftes per e-mail. Alle aftaler og vilkår skal accepteres før booking kan gennemføres.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth forbeholder sig ret til at afslå en booking uden angiven grund.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Betaling</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Priser er angivet ekskl. moms. Betaling forventes at modtages senest 14 dage før den aftalt dato. Hvis betaling ikke modtages til tiden, kan TrylleKenneth annullere booingen.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Alle transaktioner er sikret og processeret gennem validerede betalingssystemer.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Aflysning og ændring</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Klient kan aflyst booingen indtil 30 dage før arrangementet uden gebyr. Aflysning mellem 15-30 dage inden arrangementet medfører 25% gebyr. Aflysning mindre end 15 dage inden arrangementet medfører 100% gebyr.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth kan aflyst booingen med kort varsel i tilfælde af force majeure (sygdom, ulykker osv.) og tilbyde alternativ dato.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Ansvar og forsikring</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth er fuldt forsikret til at udføre professionel magisk underholtning. Vi er ikke ansvarlige for skader på personer eller ejendom, som ikke direkte forårsaget af TrylleKenneth.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Klient accepterer alle risici forbundet med at have gæster til arrangementet. Lokalet skal være egnet til performance.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Billeder og video</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth kan tage billeder og videooptagelser under performances til markedsføring og portfolio-formål, medmindre andet er aftalt. Hvis dette ikke ønskes, skal det angives ved booking.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Klient accepterer at billeder med gæster (især børn) kan bruges til sociale medier og markedsføring, medmindre eksplicit forbudt skriftligt på forhånd.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Ændringer i vilkår</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth forbeholder sig ret til at ændre disse vilkår ad enhver tid. Ændringer vil være gældende fra publicering på hjemmesiden.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Fortolkning af dansk og engelsk</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Hvis der er uoverensstemmelse mellem den danske og engelske version af disse vilkår, gælder den danske version.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Kontakt</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    For spørgsmål vedrørende disse vilkår og betingelser, kontakt venligst:<br />
                    Email: kenneth@tryllekenneth.dk<br />
                    Telefon: +45 40 85 27 28
                  </p>
                </section>

                <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-slate-200">
                  Sidst opdateret: Januar 2026
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. About this website</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth is registered as a self-employed entertainer. This website provides information and booking options for magical entertainment services for events and celebrations throughout Denmark.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Booking and agreements</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Booking a performance through this website is binding for both parties. The booking is confirmed by email. All agreements and terms must be accepted before booking can be completed.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth reserves the right to refuse any booking without providing a reason.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Payment</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    All prices are stated excluding VAT. Payment is expected to be received no later than 14 days before the agreed date. If payment is not received in time, TrylleKenneth may cancel the booking.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    All transactions are secure and processed through validated payment systems.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Cancellation and amendments</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Clients may cancel the booking up to 30 days before the event without charge. Cancellation between 15-30 days before the event incurs a 25% fee. Cancellation less than 15 days before the event incurs a 100% fee.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth may cancel the booking on short notice in case of force majeure (illness, accidents, etc.) and offer an alternative date.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Liability and insurance</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth is fully insured to perform professional magical entertainment. We are not responsible for injury to persons or damage to property not directly caused by TrylleKenneth.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Clients accept all risks associated with hosting guests at the event. The venue must be suitable for performance.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Photos and video</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth may take photographs and video recordings during performances for marketing and portfolio purposes, unless otherwise agreed. If this is not desired, it must be noted at the time of booking.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Clients accept that photos featuring guests (especially children) may be used on social media and for marketing purposes, unless explicitly prohibited in writing prior to the event.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Changes to terms</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth reserves the right to change these terms at any time. Changes will be effective from publication on this website.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Interpretation of Danish and English</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If there is any discrepancy between the Danish and English versions of these terms, the Danish version shall prevail.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Contact</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    For questions regarding these terms and conditions, please contact:<br />
                    Email: kenneth@tryllekenneth.dk<br />
                    Phone: +45 40 85 27 28
                  </p>
                </section>

                <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-slate-200">
                  Last updated: January 2026
                </p>
              </>
            )}
          </article>
        </div>

        {/* Transition gradient before footer */}
        <div className="h-16 bg-gradient-to-b from-slate-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        <Footer />
      </main>
    </>
  );
}
