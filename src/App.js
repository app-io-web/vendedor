import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Metrics from "./pages/Metrics";
import AdminMetrics from "./pages/AdminMetrics";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Config from "./pages/Config"; // 👈 import da nova página
import AdminConfigClassificacao from "./pages/AdminConfigClassificacao";
import AdminConfigIndex from "./pages/AdminConfigIndex";
import AdminConfigComissao from "./pages/AdminConfigComissao";
import AdminConfigNotificacoes from "./pages/AdminConfigNotificacoes";

import IndicacoesPage from "./pages/Indicacoes/IndicacoesPage";
import FormularioIndicacao from "./pages/Indicacoes/FormularioIndicacao";
import MinhasIndicacoesPage from "./pages/Indicacoes/MinhasIndicacoesPage";
import VerificarIndicacoesPage from "./pages/Indicacoes/VerificarIndicacoesPage";




function App() {
  // ⛑ Redirecionador automático no client
  useEffect(() => {
    const pathname = window.location.pathname;
    const hasHash = window.location.hash.startsWith("#/");
    const isRoot = pathname === "/" || pathname.includes("index.html");

    if (!hasHash && !isRoot) {
      const search = window.location.search || "";
      const hashPath = "#" + pathname + search;
      window.location.replace("/" + hashPath);
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/config" element={<Config />} /> {/* ✅ nova rota aqui */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/metrics" element={<AdminMetrics />} />
        <Route path="/admin/config-classificacao" element={<AdminConfigClassificacao />} />
        <Route path="/admin/config" element={<AdminConfigIndex />} />
        <Route path="/admin/config-comissão" element={<AdminConfigComissao />} />
        <Route path="/admin/config-notificacoes" element={<AdminConfigNotificacoes />} />


        <Route path="/indicacoes" element={<IndicacoesPage />} />
        <Route path="/indicar" element={<FormularioIndicacao />} />
        <Route path="/indicacoes/minhas" element={<MinhasIndicacoesPage />} />
        <Route path="/admin/verificar-indicacoes" element={<VerificarIndicacoesPage />} />


      </Routes>
    </HashRouter>
  );
}

export default App;
