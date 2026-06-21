import Link from "next/link";
import { ObjectConfig, NAV_LINKS, CONTACT_INFO } from "@/content/siteConfig";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-4 inline-block text-2xl font-bold text-white">
              {ObjectConfig.name}
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Empowering global enterprises with cutting-edge IT services and scalable team augmentation.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => ["About Us", "Careers", "Contact", "Case Studies"].includes(l.name)).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Services</h3>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => ["Services", "Staff Augmentation", "Industries"].includes(l.name)).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {ObjectConfig.name}. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
