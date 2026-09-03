const links = [
  { label: "Instagram", href: "https://www.instagram.com/dr.chistearruabarrena/", icon: "◎" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593611543467", icon: "◌" },
  { label: "WhatsApp", href: "https://wa.me/message/DFEARCGPWY55L1", icon: "✆" },
  { label: "Correo", href: "mailto:consultas@dr-chistearruabarrena.com", icon: "@" },
  { label: "Consulta", href: "#pendiente", icon: "✦" }
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="brand-stage" aria-label="Marca ACA">
        <img src="/aca-logo.png" alt="ACA - Augusto Chisté Arruabarrena" className="brand-logo" />
      </div>

      <nav className="links" aria-label="Enlaces principales">
        {links.map((link) => (
          <a className="link-button" href={link.href} key={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
            <span className="link-icon" aria-hidden="true">{link.icon}</span>
            <span className="link-label">{link.label}</span>
            <span className="link-arrow" aria-hidden="true">›</span>
          </a>
        ))}
      </nav>
    </main>
  );
}