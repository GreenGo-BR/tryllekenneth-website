import { Metadata } from 'next';

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  const { locale } = params;
  const isDA = locale === 'da';
  
  return {
    title: isDA 
      ? 'Magisk Underholdning til Firmaarrangementer | Corporate Events i Danmark'
      : 'Magic Entertainment for Corporate Events | Company Events in Denmark',
    description: isDA
      ? 'Professionel underholdning til firmaevents, konferencer, julefrokoster og networking events i København og hele Danmark. Kenneth tilbyder magisk underholdning til alle typer firmaarrangementer.'
      : 'Professional entertainment for corporate events, conferences, Christmas parties and networking events in Copenhagen and throughout Denmark. Kenneth offers magic entertainment for all types of company arrangements.',
    openGraph: {
      title: isDA
        ? 'Magisk Underholdning til Firmaarrangementer | Kenneth'
        : 'Magic Entertainment for Corporate Events | Kenneth',
      description: isDA
        ? 'Uforglemmelig magisk underholdning til dit firmaarrangement, konference eller julefest'
        : 'Unforgettable magic entertainment for your corporate event, conference or Christmas party',
      type: 'website',
      locale: locale === 'da' ? 'da_DK' : 'en_US',
    },
    alternates: {
      canonical: `https://tryllekenneth.dk/${locale}/firmaarrangementer`,
      languages: {
        'da-DK': 'https://tryllekenneth.dk/da/firmaarrangementer',
        'en-US': 'https://tryllekenneth.dk/en/firmaarrangementer',
      },
    },
    keywords: isDA
      ? ['magisk underholdning', 'firmaarrangementer', 'firmaevents', 'konferencer', 'julefrokoster', 'networking events', 'tryllekunstner København', 'corporate events Danmark']
      : ['magic entertainment', 'corporate events', 'company parties', 'conferences', 'networking events', 'magician Copenhagen', 'event entertainment'],
  };
};
