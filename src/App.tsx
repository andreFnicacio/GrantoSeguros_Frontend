import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import BackOffice from "./pages/BackOffice";
import PginaLogin from "./pages/PginaLogin";
import CriarConta11 from "./pages/CriarConta1";
import PaginaInicial1 from "./pages/PaginaInicial1";
import PginaLogin from "./pages/PginaLogin1";
import CriarConta from "./pages/CriarConta";
import BackOffice1 from "./pages/BackOffice1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/backoffice":
        title = "";
        metaDescription = "";
        break;
      case "/pgina-login1":
        title = "";
        metaDescription = "";
        break;
      case "/criar-conta":
        title = "";
        metaDescription = "";
        break;
      case "/pagina-inicial":
        title = "";
        metaDescription = "";
        break;
      case "/pgina-login":
        title = "";
        metaDescription = "";
        break;
      case "/criar-conta1":
        title = "";
        metaDescription = "";
        break;
      case "/backoffice1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/backoffice" element={<BackOffice />} />
      <Route path="/pgina-login1" element={<PginaLogin />} />
      <Route path="/criar-conta" element={<CriarConta11 />} />
      <Route path="/pagina-inicial" element={<PaginaInicial1 />} />
      <Route path="/pgina-login" element={<PginaLogin />} />
      <Route path="/criar-conta1" element={<CriarConta />} />
      <Route path="/backoffice1" element={<BackOffice1 />} />
    </Routes>
  );
}
export default App;