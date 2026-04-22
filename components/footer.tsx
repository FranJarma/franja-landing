import Image from "next/image";

import { siteConfig, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-frame pb-10">
      <div className="flex flex-col gap-8 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <a href="/" className="inline-flex" aria-label="Ir al inicio">
            <Image
              src="/logo.png"
              alt="Franja"
              width={1672}
              height={941}
              className="h-20 w-auto md:h-24"
              sizes="(max-width: 768px) 163px, 171px"
            />
          </a>

          <address className="space-y-1 not-italic">
            <p className="text-white/80">{siteConfig.legalName}</p>
            <p>Agencia ágil de diseño, producto y tecnología.</p>
            <p>{siteConfig.location}</p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>

        <div className="space-y-3 md:text-right">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
            Redes sociales
          </p>
          <ul className="flex flex-wrap gap-5 md:justify-end">
            {socialLinks.map((link) => (
              <li key={link.label} className="list-none">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
