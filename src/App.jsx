import Header from "./components/Header";
import MainHighlights from "./containers/MainHighlights";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainHighlights />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
