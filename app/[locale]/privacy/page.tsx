import { useLocale } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | TrylleKenneth',
  description: 'Privacy Policy for TrylleKenneth magic performances and entertainment',
};

export default function PrivacyPage() {
  const locale = useLocale();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p>
                TrylleKenneth ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personal Information: Name, email address, phone number, address, and payment information provided when booking services</li>
                <li>Event Details: Date, location, guest count, and specific performance requests</li>
                <li>Website Usage: Information about your device, browser, IP address, and pages visited</li>
                <li>Communication Records: Emails, messages, and inquiries you send to us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Use of Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Processing and managing your booking requests</li>
                <li>Sending confirmation emails and performance details</li>
                <li>Processing payments securely</li>
                <li>Responding to your inquiries and customer service requests</li>
                <li>Improving our website and services</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>With trusted service providers who assist in operating our website and conducting our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. Cookies are small files stored on your device that help us recognize you and improve our services. You can choose to disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Children's Privacy</h2>
              <p>
                Our services are not intentionally directed toward children under 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete such information immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the updated policy on our website with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <ul className="list-none space-y-2">
                <li>Phone: +45 40 85 27 28</li>
                <li>Email: kenneth@tryllekenneth.dk</li>
                <li>Website: www.tryllekenneth.dk</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. GDPR Compliance</h2>
              <p>
                For users in the European Union, this Privacy Policy complies with the General Data Protection Regulation (GDPR). You have the rights outlined above and can contact us to exercise them.
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
