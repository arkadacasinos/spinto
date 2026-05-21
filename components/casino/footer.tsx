'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const footerColumns = [
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'Support',
      links: ['Contact', 'FAQ', 'Documentation', 'Community'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Responsible Gaming', 'Licenses'],
    },
    {
      title: 'Gaming',
      links: ['Slots', 'Live Casino', 'Providers', 'Tournaments'],
    },
  ];

  const socialIcons = [
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-[#2a1650] bg-gradient-to-b from-[#0f0520] to-[#0a0415] py-8 md:py-12">
      <div className="px-4 md:px-6 lg:pl-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-[#00d4ff] mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-[#ff00ff] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social */}
        <div className="border-t border-[#2a1650] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#00d4ff]" />
                <a href="mailto:support@casino.com" className="text-xs md:text-sm text-gray-400 hover:text-[#00d4ff]">
                  support@casino.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#00d4ff]" />
                <a href="tel:+1234567890" className="text-xs md:text-sm text-gray-400 hover:text-[#00d4ff]">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="h-8 w-8 rounded-full border border-[#2a1650] flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all hover:shadow-[0_0_10px_rgba(0,212,255,0.3)]"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#2a1650] mt-6 pt-6">
            <p className="text-xs text-gray-500 text-center">
              © 2024 Premium Casino. All rights reserved. | Responsible Gaming | Licensed & Regulated
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
