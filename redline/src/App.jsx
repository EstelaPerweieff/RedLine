import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./styles.css";

// Páginas que ainda vamos criar: por enquanto usam um marcador simples.
const EmBreve = ({ titulo }) => (
  <section className="container" style={{ padding: "80px 0" }}>
    <h2>{titulo}</h2>
    <p>Página em construção.</p>
  </section>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<EmBreve titulo="Sobre" />} />
          <Route path="/como-funciona" element={<EmBreve titulo="Como funciona" />} />
          <Route path="/instituicoes" element={<EmBreve titulo="Instituições" />} />
          <Route path="/duvidas" element={<EmBreve titulo="Dúvidas" />} />
          <Route path="/entrar" element={<EmBreve titulo="Entrar" />} />
          <Route path="/doar" element={<EmBreve titulo="Quero doar" />} />
          <Route path="/contato" element={<EmBreve titulo="Contato" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
