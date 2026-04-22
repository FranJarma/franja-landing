const footerLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
];

export function Footer() {
  return (
    <footer className="section-frame pb-10">
      <div className="flex flex-col gap-8 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <a href="/" className="inline-flex">
            <img src="/logo.png" alt="Franja Mark" className="h-20 w-auto md:h-24" />
          </a>
          <div className="space-y-1">
            <p className="text-white/80">Franja</p>
            <p>Agencia ágil de diseño, producto y tecnología.</p>
            <p>Salta, Argentina.</p>
          </div>
        </div>

        <div className="space-y-3 md:text-right">
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
            Redes sociales
          </p>
          <div className="flex flex-wrap gap-5 md:justify-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="nav-link py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
