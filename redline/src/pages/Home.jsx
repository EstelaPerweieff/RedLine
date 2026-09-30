import { useState } from "react";
import { Link } from "react-router-dom";
import { Drop, Heart, Logo } from "../components/Layout";

const steps = [
  { title: "Encontre pontos de coleta", text: "Veja os hemocentros e instituições mais próximas de você.", icon: "👥", tone: "blue" },
  { title: "Agende sua doação", text: "Escolha o melhor dia e horário, de forma rápida e segura.", icon: "📅", tone: "green" },
  { title: "Doe sangue", text: "Um gesto simples que salva até 4 vidas.", icon: <Drop size={28} color="#C8202F" />, tone: "red" },
  { title: "Acompanhe seu impacto", text: "Veja quantas vidas você já ajudou a transformar.", icon: <Heart size={28} color="#C8202F" />, tone: "red" },
];

const stats = [
  { value: "+1,2 milhão", label: "de vidas impactadas" },
  { value: "320", label: "instituições parceiras" },
  { value: "+180 mil", label: "doadores cadastrados" },
];

const testimonials = [
  { text: "Doar sangue é simples, rápido e faz toda a diferença. Eu me sinto parte de algo maior.", name: "Mariana C.", since: "Doadora desde 2021" },
  { text: "Consegui agendar em poucos minutos e fui muito bem atendido no hemocentro.", name: "Rafael S.", since: "Doador desde 2023" },
  { text: "Como instituição, o RedLine nos ajuda a alcançar doadores quando mais precisamos.", name: "Hemocentro Regional", since: "Instituição parceira" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-in">
          <div className="hero-text">
            <p className="kicker">Pequenas atitudes. Grandes vidas.</p>
            <h1>
              Doe sangue.
              <br />
              <span>Conecte vidas.</span>
            </h1>
            <p className="lead">
              O RedLine é a ponte entre doadores e instituições de saúde. Encontre um ponto de
              coleta, agende sua doação e faça parte dessa corrente do bem.
            </p>
            <div className="hero-cta">
              <Link to="/doar" className="btn btn-red">
                <Drop size={18} /> Quero doar agora →
              </Link>
              <Link to="/como-funciona" className="btn btn-outline">▶ Como funciona</Link>
            </div>
            <ul className="badges">
              <li>🛡️ Seguro</li>
              <li>👥 Confiável</li>
              <li>❤️ Impacto real</li>
            </ul>
          </div>

          <span className="script hero-script">Juntos fazemos a diferença ♡</span>
          <Link to="/instituicoes" className="need-card">
            <Drop size={38} color="#C8202F" />
            <strong>Alguém precisa<br />de você agora</strong>
            <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      {/* PASSOS */}
      <section className="container steps">
        {steps.map((s) => (
          <article key={s.title} className="step">
            <div className={"step-icon " + s.tone}>{s.icon}</div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </article>
        ))}
      </section>

      {/* IMPACTO */}
      <section className="container impact">
        <div className="impact-img">
          <div className="heart-badge">
            <Heart size={150} color="#D91E2E" />
            <span>SANGUE<br />CONECTA<br />PESSOAS</span>
          </div>
          <span className="script">Doar hoje é um amanhã para alguém ♡</span>
        </div>

        <div className="impact-body">
          <p className="kicker">Impacto real</p>
          <h2>
            Uma corrente que <span>transforma realidades</span>
          </h2>
          <p>
            Cada doação ajuda pacientes em cirurgias, tratamentos de câncer, emergências e muitas
            outras situações. Quando você doa, a vida continua para alguém.
          </p>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>

        <aside className="quote">
          <span className="quote-mark">“</span>
          <p>{t.text}</p>
          <strong>{t.name}</strong>
          <small>{t.since}</small>
          <div className="dots" role="tablist" aria-label="Depoimentos">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={i === active ? "on" : ""}
                onClick={() => setActive(i)}
                aria-label={`Depoimento ${i + 1}`}
                aria-selected={i === active}
              />
            ))}
          </div>
        </aside>
      </section>

      {/* CTA FINAL */}
      <section className="container">
        <div className="cta-banner">
          <Logo light />
          <div>
            <h2>Pronto para fazer a diferença?</h2>
            <p>Encontre um ponto de coleta perto de você e agende sua doação agora.</p>
          </div>
          <Link to="/doar" className="btn btn-white">
            <Drop size={18} color="#C8202F" /> Quero doar agora →
          </Link>
          <span className="script">Boa gente salva vidas ♡</span>
        </div>
      </section>
    </>
  );
}
