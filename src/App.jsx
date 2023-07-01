import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { useEffect } from "react";

import { Home, Services, Works, About, Contact } from "./components/pages";

import { Zee5, CostaCruises } from "./components/pages/Casestudies";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/work" Component={Works} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/work/zee5" Component={Zee5} />
        <Route path="/work/costacruises" Component={CostaCruises} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
