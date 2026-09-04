const links = [
  { label: "Instagram", href: "https://www.instagram.com/dr.chistearruabarrena/", icon: "/instagram.svg" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61593611543467", icon: "/facebook.svg" },
  { label: "WhatsApp", href: "https://wa.me/message/DFEARCGPWY55L1", icon: "/whatsapp.svg" },
  { label: "Correo", href: "mailto:consultas@dr-chistearruabarrena.com", icon: "/correo.svg" }
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="brand-stage" aria-label="Marca ACA">
        <div className="brand-frame">
          <img src="/logo%20recta.png" alt="ACA - Augusto Chisté Arruabarrena" className="brand-logo" />
        </div>
      </div>

      <nav className="links" aria-label="Enlaces principales">
        {links.map((link) => (
          <a className="link-button" href={link.href} key={link.label} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
            <img className="link-icon" src={link.icon} alt="" aria-hidden="true" />
            <span className="link-label">{link.label}</span>
            <span className="link-arrow" aria-hidden="true">›</span>
          </a>
        ))}
      </nav>
    </main>
  );
}