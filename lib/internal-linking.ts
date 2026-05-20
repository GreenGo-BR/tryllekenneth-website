/**
 * Internal SEO Linking Strategy
 * Defines natural, contextual links between related pages to build topical authority
 * 
 * Topical Clusters:
 * 1. TRYLLERI (Magic) - Main category connecting all magic types
 * 2. NÆRMAGI (Close-up Magic) - Intimate magic for events and personal settings
 * 3. FIRMAARRANGEMENTER (Corporate Events) - Business events and company celebrations
 * 4. JULEUNDERHOLDNING (Christmas Entertainment) - Seasonal entertainment
 * 5. EVENTS I KØBENHAVN (Events in Copenhagen) - Local market positioning
 */

export interface RelatedLink {
  href: string;
  text: string;
  reason: string;
}

export const internalLinkingStrategy = {
  closeupMagic: {
    events: [
      { href: '/bryllupper', text: 'bryllup', reason: 'Primary use: wedding entertainment' },
      { href: '/firmaarrangementer', text: 'firmaarrangement', reason: 'Corporate events' },
      { href: '/julefrokost', text: 'julefrokost', reason: 'Christmas parties' },
    ],
    services: [
      { href: '/services/standup', text: 'stand-up trylleri', reason: 'Complementary format' },
    ],
  },

  corporateEvents: {
    services: [
      { href: '/services/closeup', text: 'elegant nærmagi', reason: 'Core offering' },
      { href: '/services/standup', text: 'stand-up show', reason: 'Alternative format' },
    ],
    events: [
      { href: '/julefrokost', text: 'julearrangement', reason: 'Seasonal variation' },
      { href: '/bryllupper', text: 'bryllup', reason: 'Related event type' },
    ],
  },

  weddings: {
    services: [
      { href: '/services/closeup', text: 'elegante nærmagi', reason: 'Romantic centerpiece' },
    ],
    events: [
      { href: '/firmaarrangementer', text: 'event underholdning', reason: 'Similar service model' },
    ],
  },

  christmasParty: {
    services: [
      { href: '/services/closeup', text: 'festlig nærmagi', reason: 'Core performance' },
      { href: '/services/santa', text: 'Julemand', reason: 'Seasonal character' },
      { href: '/services/standup', text: 'energisk stand-up', reason: 'High-energy option' },
    ],
    events: [
      { href: '/firmaarrangementer', text: 'firmaarrangement', reason: 'General events' },
    ],
  },

  standupMagic: {
    events: [
      { href: '/firmaarrangementer', text: 'firmaarrangement', reason: 'Large audiences' },
      { href: '/julefrokost', text: 'julefrokost', reason: 'Energetic entertainment' },
    ],
    services: [
      { href: '/services/closeup', text: 'nærmagi', reason: 'Intimate alternative' },
    ],
  },
};
