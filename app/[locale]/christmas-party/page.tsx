import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Christmas Party | Tryllekenneth',
  description: 'Premium Christmas party entertainment and magic shows',
};

export default async function ChristmasPartyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Await params as per Next.js 15+ patterns
  const { locale } = await params;
  
  // Server-side redirect - instant, no flash, no "Redirecting..." message
  redirect(`/${locale}/julefrokost`);
}
