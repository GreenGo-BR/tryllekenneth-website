import { useLocale } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | TrylleKenneth',
  description: 'Terms of Service for TrylleKenneth magic performances and entertainment',
};

export default function TermsPage() {
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p>
                By booking and engaging TrylleKenneth for entertainment services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not book our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Service Description</h2>
              <p>
                TrylleKenneth provides professional magic performances and entertainment services including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Children's Magic Shows</li>
                <li>Stand-Up Magic Performances</li>
                <li>Close-Up Magic Entertainment</li>
                <li>Santa Claus & Seasonal Shows</li>
                <li>Corporate and Private Events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Booking and Payment</h2>
              <p>
                All bookings must be confirmed in writing and require payment of the agreed-upon fee. A deposit may be required to secure your booking. Payment terms and cancellation policies will be specified in your booking confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Cancellation Policy</h2>
              <p>
                Cancellations must be made in writing at least 14 days prior to the scheduled performance for a full refund. Cancellations made with less than 14 days notice may be subject to penalties as outlined in your booking agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Rescheduling</h2>
              <p>
                If you need to reschedule your event, please contact us as soon as possible. Rescheduling is subject to availability and may incur additional fees if required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Performance Conditions</h2>
              <p>
                The performer reserves the right to refuse service to intoxicated guests or in unsafe conditions. TrylleKenneth is not responsible for cancellations due to extreme weather conditions, illness, or circumstances beyond reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Photography and Recording</h2>
              <p>
                Clients may photograph and video record performances for personal use only. Commercial use of recordings requires written permission. Some magic tricks may not be recorded due to the nature of the performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Liability</h2>
              <p>
                TrylleKenneth is not liable for any injuries, damages, or losses arising from the performance or the use of props and materials. Event hosts are responsible for providing a safe performance space and supervising participants as appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Age Appropriateness</h2>
              <p>
                While our performances are generally family-friendly, some shows may be tailored to specific age groups. Please inform us of the age range of your audience when booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services indicates acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Information</h2>
              <p>
                For questions about these terms or to book a performance, please contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li>Phone: +45 40 85 27 28</li>
                <li>Email: kenneth@tryllekenneth.dk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Denmark.
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-8">
              Last Updated: May 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
