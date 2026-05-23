'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLocale, useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
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
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privatlivspolitik</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Introduktion</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth respekterer dit privatlivs og er forpligtet til at beskytte dine personlige data i overensstemmelse med Den Europæiske Unions Generelle Databehandlingsforordning (GDPR) og dansk lovgivning.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Denne privatlivspolitik beskriver, hvordan vi indsamler, bruger og beskytter dine personlige data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Dataansvarlig</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth er dataansvarlig for behandling af personlige data på denne hjemmeside.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Kontakt: kenneth@tryllekenneth.dk | Telefon: 40 85 27 28
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Indsamling af personlige data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vi indsamler følgende personlige data når du interagerer med os:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Navn, e-mailadresse og telefonnummer (når du booker eller kontakter os)</li>
                    <li>Oplysninger om dit arrangement (dato, sted, antal gæster, type arrangement)</li>
                    <li>Betalingsinformation (håndteret sikkert gennem tredjeparter)</li>
                    <li>IP-adresse og cookie-data (automatisk indsamling)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Brug af personlige data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Dine personlige data bruges til:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Behandling og bekræftelse af bookinger</li>
                    <li>Kommunikation vedrørende dit arrangement</li>
                    <li>Håndtering af betaling</li>
                    <li>Forbedring af vores tjenester</li>
                    <li>Compliance med lovlige forpligtelser</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vi bruger ALDRIG dine data til markedsføring uden dit samtykke.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Beskyttelse af data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Alle personlige data er beskyttet med SSL-kryptering. Vi bruger sikre betalingssystemer og gemmer ikke kreditkortinformation på vores servere.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Kun autoriseret personale har adgang til personlige data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Deling af data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vi deler IKKE dine personlige data med tredjeparter, undtagen hvor:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Det er nødvendigt for at behandle din booking (f.eks. betalingsbehandler)</li>
                    <li>Det er krævet ved lov</li>
                    <li>Du har givet eksplicit samtykke</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Billeder og video</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Hvis du ikke ønsker, at billeder eller videoer fra dit arrangement bruges til markedsføring, skal du angive dette ved booking. Du kan til enhver tid tilbagekalde tilladelse til billedbrug ved at kontakte os.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Dine rettigheder</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Under GDPR har du ret til:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Adgang til dine personlige data</li>
                    <li>Berigtigelse af unøjagtige data</li>
                    <li>Sletning af dine data (under visse betingelser)</li>
                    <li>Begrænsning af databehandling</li>
                    <li>Dataportabilitet</li>
                    <li>Indsigelse mod behandling</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    For at udøve dine rettigheder, kontakt venligst kenneth@tryllekenneth.dk
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Cookies</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vores hjemmeside bruger cookies til at forbedre brugeroplevelsen. Du kan deaktivere cookies i din browser, men dette kan påvirke funktionaliteten af hjemmesiden.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vi bruger kun væsentlige og analytiske cookies. Ingen tredjepartsmarkedsføringscookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Dataopbevaring</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Dine personlige data gemmes kun så længe, som det er nødvendigt for at opfylde de formål, de blev indsamlet til, typisk ikke længere end 3 år efter dit sidste arrangement.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Ændringer til denne politique</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Vi kan opdatere denne privatlivspolitik fra tid til anden. Du vil blive informeret om væsentlige ændringer.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Klager</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Hvis du mener, at vi ikke overholder GDPR, kan du indgive en klage til Datatilsynet (www.datatilsynet.dk).
                  </p>
                </section>

                <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-slate-200">
                  Sidst opdateret: Januar 2026
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth respects your privacy and is committed to protecting your personal data in accordance with the European Union's General Data Protection Regulation (GDPR) and Danish legislation.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    This privacy policy describes how we collect, use, and protect your personal data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">2. Data Controller</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    TrylleKenneth is the data controller for the processing of personal data on this website.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Contact: kenneth@tryllekenneth.dk | Phone: 40 85 27 28
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">3. Collection of personal data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We collect the following personal data when you interact with us:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Name, email address, and phone number (when you book or contact us)</li>
                    <li>Information about your event (date, location, number of guests, type of event)</li>
                    <li>Payment information (handled securely through third parties)</li>
                    <li>IP address and cookie data (automatically collected)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">4. Use of personal data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Your personal data is used for:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Processing and confirming bookings</li>
                    <li>Communication regarding your event</li>
                    <li>Payment processing</li>
                    <li>Improvement of our services</li>
                    <li>Compliance with legal obligations</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We NEVER use your data for marketing without your consent.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">5. Data Protection</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    All personal data is protected with SSL encryption. We use secure payment systems and do not store credit card information on our servers.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Only authorized personnel have access to personal data.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">6. Sharing of data</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We do NOT share your personal data with third parties, except where:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Necessary to process your booking (e.g., payment processor)</li>
                    <li>Required by law</li>
                    <li>You have given explicit consent</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">7. Photos and video</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you do not wish photos or videos from your event to be used for marketing purposes, please indicate this at the time of booking. You can withdraw permission for photo use at any time by contacting us.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">8. Your rights</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Under GDPR, you have the right to:
                  </p>
                  <ul className="text-slate-700 leading-relaxed mb-4 ml-6">
                    <li>Access to your personal data</li>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion of your data (under certain conditions)</li>
                    <li>Restriction of data processing</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                  </ul>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    To exercise your rights, please contact kenneth@tryllekenneth.dk
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">9. Cookies</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Our website uses cookies to improve user experience. You can disable cookies in your browser, but this may affect the functionality of the website.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We use only essential and analytical cookies. No third-party marketing cookies.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">10. Data retention</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Your personal data is retained only as long as necessary to fulfill the purposes for which it was collected, typically no longer than 3 years after your last event.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">11. Changes to this policy</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We may update this privacy policy from time to time. You will be informed of any material changes.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">12. Complaints</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you believe we are not complying with GDPR, you can file a complaint with the Danish Data Protection Authority (www.datatilsynet.dk).
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
