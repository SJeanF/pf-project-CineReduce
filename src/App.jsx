import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainHighlights from "./containers/MainHighlights";
import Footer from "./components/Footer";
import MainSearch from "./containers/MainSearch";
import AdminArea from "./containers/AdminArea";

import { randomRoute } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHighlights />} />
        <Route path="/search" element={<MainSearch />} />
        <Route path={`/${randomRoute}`} element={<AdminArea />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
