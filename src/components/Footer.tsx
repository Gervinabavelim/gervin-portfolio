"use client";

const footerLinks = {
  Projects: [
    { label: "Project Tracker", href: "#" },
    { label: "Laundry Service", href: "#" },
    { label: "Orderly", href: "#" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/Gervinabavelim" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gervin-abavelim-64054918a" },
    { label: "Twitter", href: "https://x.com/Gervindev" },
  ],
  Contact: [
    { label: "Email", href: "mailto:abavelimgervin@gmail.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-bold text-white text-lg">Gervin</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Software developer building modern web applications from Manila.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Gervin Abavelim. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
