'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../ui/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNav, servicesNav, productsNav } from '@/content/navigation';

export function ProfessionalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getDropdownContent = (type: string) => {
    if (type === 'services') return servicesNav;
    if (type === 'products') return productsNav;
    return [];
  };

  const toggleDropdown = (dropdown: string | null) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNav.map((item) => {
              const itemIsActive = item.hasDropdown ? false : isActive(item.href);
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.dropdown || null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button 
                      onClick={() => toggleDropdown(item.dropdown || null)}
                      className={`flex items-center gap-1 font-medium transition-colors py-6 ${
                        activeDropdown === item.dropdown 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors ${
                        itemIsActive
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mega Dropdown */}
                  {item.hasDropdown && activeDropdown === item.dropdown && (
                    <div className={`absolute top-full pt-2 ${item.dropdown === 'products' ? 'right-0 w-auto min-w-[600px]' : 'left-1/2 -translate-x-1/2 w-screen max-w-5xl'}`}>
                      <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-800 p-8">
                        <div className={`grid gap-8 ${item.dropdown === 'products' ? 'grid-cols-2' : 'grid-cols-4'}`}>
                          {getDropdownContent(item.dropdown!).map((category) => (
                            <div key={category.title}>
                              {category.href ? (
                                <Link
                                  href={category.href}
                                  onClick={closeDropdown}
                                  className="block group"
                                >
                                  <h3
                                    className="font-bold text-sm uppercase tracking-wider mb-4 group-hover:opacity-80 transition-opacity cursor-pointer"
                                    style={{ color: category.color }}
                                  >
                                    {category.title}
                                  </h3>
                                </Link>
                              ) : (
                                <Link
                                  href={`/${item.dropdown}/${category.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                  onClick={closeDropdown}
                                  className="block group"
                                >
                                  <h3
                                    className="font-bold text-sm uppercase tracking-wider mb-4 group-hover:opacity-80 transition-opacity"
                                    style={{ color: category.color }}
                                  >
                                    {category.title}
                                  </h3>
                                </Link>
                              )}
                              <ul className="space-y-3">
                                {category.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      onClick={closeDropdown}
                                      className="block group"
                                    >
                                      <div className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">
                                        {subItem.name}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-0.5">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {mainNav.map((item) => {
                const itemIsActive = item.hasDropdown ? false : isActive(item.href);
                
                return (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown || null)}
                          className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                        >
                          {item.name}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {activeDropdown === item.dropdown && (
                          <div className="pl-4 mt-2 space-y-4">
                            {getDropdownContent(item.dropdown!).map((category) => (
                              <div key={category.title}>
                                <h4 className="font-bold text-xs uppercase tracking-wider mb-2" style={{ color: category.color }}>
                                  {category.title}
                                </h4>
                                <ul className="space-y-2">
                                  {category.items.map((subItem) => (
                                    <li key={subItem.name}>
                                      <Link
                                        href={subItem.href}
                                        className="block text-sm text-gray-600 hover:text-gray-900"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block font-medium py-2 ${
                          itemIsActive
                            ? 'text-blue-600 border-l-4 border-blue-600 pl-3'
                            : 'text-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
