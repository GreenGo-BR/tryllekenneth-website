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

interface PremiumNavProps {
  isMobile?: boolean;
}

export function PremiumNav({ isMobile = false }: PremiumNavProps) {
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
  const performancesLabel = locale === 'da' ? 'Shows' : 'Performances';
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
    setOpenDropdown(key);
  };

  const handleDesktopMouseLeave = (key: string) => {
    setOpenDropdown(null);
  };

  const renderNavItem = (item: NavItem, isMobileView = false) => {
    const isDropdown = item.children && item.children.length > 0;
    const isOpen = openDropdown === item.key;

    if (isDropdown) {
      return (
        <div 
          key={item.key} 
          className={isMobileView ? 'relative' : 'relative group'}
          onMouseEnter={() => !isMobileView && handleDesktopMouseEnter(item.key)}
          onMouseLeave={() => !isMobileView && handleDesktopMouseLeave(item.key)}
        >
          <button
            onClick={() => handleDropdownToggle(item.key, true)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-500 transition-all duration-300 relative ${
              isMobileView
                ? 'w-full text-left text-gray-200 hover:text-amber-300 hover:bg-amber-500/5'
                : 'text-gray-300 hover:text-amber-300 hover:bg-amber-500/5'
            } ${isOpen && !isMobileView ? 'text-amber-300 bg-amber-500/5' : ''}`}
          >
            {item.key === 'performances' ? performancesLabel : item.key === 'seasonal' ? seasonalLabel : t(item.key as any)}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
            {/* Elegant underline for desktop */}
            {!isMobileView && (
              <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 transition-opacity duration-300 ${
                isOpen || (isMobileView === false && false) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
            )}
          </button>

          {/* Desktop Dropdown - Premium styling */}
          {!isMobileView && (
            <div className={`absolute left-0 top-full mt-1 w-56 rounded-xl border border-amber-500/20 bg-slate-950/95 backdrop-blur-lg shadow-2xl shadow-black/40 transition-all duration-300 z-50 ${
              isOpen
                ? 'opacity-100 visible pointer-events-auto'
                : 'opacity-0 invisible pointer-events-none'
            }`}>
              {/* Dropdown arrow */}
              <div className="absolute top-0 left-6 w-3 h-3 bg-slate-950/95 border-t border-l border-amber-500/20 rounded-tl transform -translate-y-1.5 rotate-45" />
              
              <div className="pt-3 pb-2">
                {item.children.map((child, idx) => (
                  <Link
                    key={child.key}
                    href={child.href}
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-5 py-3 text-sm font-500 text-gray-300 hover:text-amber-300 hover:bg-amber-500/10 transition-all duration-200 ${
                      idx === 0 ? 'pt-4' : ''
                    } ${idx === item.children!.length - 1 ? 'pb-4' : ''}`}
                  >
                    {t(child.key as any)}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Dropdown - Clean and spacious */}
          {isMobileView && isOpen && (
            <div className="pl-6 space-y-1 border-l-2 border-amber-500/20 my-2">
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={child.href}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-4 py-2.5 text-sm font-500 text-gray-300 hover:text-amber-300 hover:bg-amber-500/5 rounded-lg transition-all duration-200"
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
        className={`relative group px-4 py-2.5 rounded-lg text-sm font-500 transition-all duration-300 ${
          isMobileView 
            ? 'block w-full text-left text-gray-300 hover:text-amber-300 hover:bg-amber-500/5' 
            : 'text-gray-300 hover:text-amber-300 hover:bg-amber-500/5'
        }`}
      >
        {t(item.key as any)}
        {/* Elegant underline for desktop */}
        {!isMobileView && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </Link>
    );
  };

  return (
    <div ref={dropdownRef} className={`flex ${isMobile ? 'flex-col w-full gap-1' : 'items-center gap-1'}`}>
      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="flex items-center gap-2">
          {Object.values(navConfig).map((item) => renderNavItem(item, false))}
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="w-full space-y-1">
          {Object.values(navConfig).map((item) => renderNavItem(item, true))}
        </div>
      )}
    </div>
  );
}
