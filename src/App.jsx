import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MainHighlights from "./containers/MainHighlights";
import Footer from "./components/Footer";
import MainSearch from "./containers/MainSearch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHighlights />} />
        <Route path="/search" element={<MainSearch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
