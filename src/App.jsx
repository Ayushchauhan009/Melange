import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Services, Works, About, Contact } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/services" Component={Services} />
        <Route path="/work" Component={Works} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
