import { Link, NavLink, Outlet } from "react-router-dom";

export function Drop({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z" />
    </svg>
  );
}

export function Heart({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M12 21s-8-5.4-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.6-8 11-8 11z" />
    </svg>
  );
}

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/instituicoes", label: "Instituições" },
  { to: "/duvidas", label: "Dúvidas" },
];

export function Logo({ light }) {
  return (
    <Link to="/" className={"logo" + (light ? " logo-light" : "")}>
      <Drop size={34} color={light ? "#fff" : "#C8202F"} />
      <span>
        <strong>RedLine</strong>
        <small>Conectando vidas</small>
      </span>
    </Link>
  );
}

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="container header-in">
          <Logo />
          <nav aria-label="Principal">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Link to="/entrar" className="btn btn-outline btn-sm">Entrar</Link>
            <Link to="/doar" className="btn btn-red btn-sm">
              <Drop size={16} /> Quero doar
            </Link>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-in">
          <Logo />
          <nav aria-label="Rodapé">
            <Link to="/sobre">Sobre</Link>
            <Link to="/instituicoes">Instituições</Link>
            <Link to="/duvidas">Dúvidas</Link>
            <Link to="/contato">Contato</Link>
          </nav>
          <span className="footer-end">
            Mais vidas. Sempre. <Heart size={22} color="#C8202F" />
          </span>
        </div>
      </footer>
    </>
  );
}