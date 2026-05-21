'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  key: string;
  href: string;
  children?: NavItem[];
}

interface NavConfig {
  [key: string]: NavItem;
}

export function PremiumNav() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Main navigation structure
  const navConfig: NavConfig = {
    home: {
      key: 'home',
      href: `/${locale}`,
    },
    performances: {
      key: 'performances',
      href: '#',
      children: [
        { key: 'childrensMagic', href: `/${locale}/services/childrens` },
        { key: 'birthdayParties', href: locale === 'da' ? `/${locale}/services/boernefoedselsdag` : `/${locale}/services/birthday-parties` },
        { key: 'standUpMagic', href: `/${locale}/services/standup` },
        { key: 'closeUpMagic', href: `/${locale}/services/closeup` },
        { key: 'corporateEvents', href: `/${locale}/firmaarrangementer` },
        { key: 'weddings', href: `/${locale}/bryllupper` },
      ],
    },
    seasonal: {
      key: 'seasonal',
      href: '#',
      children: [
        { key: 'santa', href: `/${locale}/services/santa` },
        { key: 'christmasParty', href: `/${locale}/julefrokost` },
      ],
    },
    gallery: {
      key: 'gallery',
      href: `/${locale}/gallery`,
    },
    faq: {
      key: 'faq',
      href: `/${locale}/faq`,
    },
    contact: {
      key: 'contact',
      href: `/${locale}/contact`,
    },
  };

  // Translation mapping for dropdown labels
  const performancesLabel = locale === 'da' ? 'Optrædener' : 'Performances';
  const seasonalLabel = t('seasonal');

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (key: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpenDropdown(openDropdown === key ? null : key);
    }
  };

  const handleDesktopMouseEnter = (key: string) => {
    // On hover, show the dropdown (don't close if already open from click)
    setOpenDropdown(key);
  };

  const handleDesktopMouseLeave = (key: string) => {
    // On hover out, close if it's not pinned by click
    setOpenDropdown(null);
  };

  const renderNavItem = (item: NavItem, isMobile = false) => {
    const isDropdown = item.children && item.children.length > 0;
    const isOpen = openDropdown === item.key;

    if (isDropdown) {
      return (
        <div 
          key={item.key} 
          className={isMobile ? 'relative' : 'relative'}
          onMouseEnter={() => !isMobile && handleDesktopMouseEnter(item.key)}
          onMouseLeave={() => !isMobile && handleDesktopMouseLeave(item.key)}
        >
          <button
            onClick={() => handleDropdownToggle(item.key, true)}
            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isMobile
                ? 'w-full text-left hover:bg-muted'
                : 'hover:bg-muted/50'
            } ${isOpen && !isMobile ? 'bg-muted' : ''}`}
          >
            {item.key === 'performances' ? performancesLabel : item.key === 'seasonal' ? seasonalLabel : t(item.key as any)}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Desktop Dropdown */}
          {!isMobile && (
            <div className={`absolute left-0 top-full mt-0 w-48 rounded-lg border border-border/50 bg-background/95 backdrop-blur shadow-lg transition-all duration-200 z-50 ${
              isOpen
                ? 'opacity-100 visible pointer-events-auto'
                : 'opacity-0 invisible pointer-events-none'
            }`}>
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2.5 text-sm font-medium hover:bg-muted/70 first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {t(child.key as any)}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Dropdown */}
          {isMobile && isOpen && (
            <div className="pl-4 space-y-1 border-l border-border/30 my-1">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-3 py-2 text-sm font-medium hover:bg-muted/70 rounded-lg transition-colors"
                >
                  {t(child.key as any)}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.key}
        href={item.href}
        onClick={() => setOpenDropdown(null)}
        className={`px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors ${
          isMobile ? 'block' : ''
        }`}
      >
        {t(item.key as any)}
      </Link>
    );
  };

  return (
    <div ref={dropdownRef} className="flex items-center gap-1 w-full">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-0">
        {Object.values(navConfig).map((item) => renderNavItem(item, false))}
      </nav>

      {/* Mobile Navigation - Return the items for mobile menu */}
      <div className="md:hidden w-full">
        {Object.values(navConfig).map((item) => renderNavItem(item, true))}
      </div>
    </div>
  );
}
