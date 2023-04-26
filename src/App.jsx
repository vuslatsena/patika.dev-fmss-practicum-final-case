import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, BackgroundParticles } from "./components"; // Import your footer component
import { StarshipsProvider } from "./contexts/StarshipsContext";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <StarshipsProvider>
        <BackgroundParticles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="starships/:name" element={<Detail key={"detail"} />} />
        </Routes>
      </StarshipsProvider>
    </BrowserRouter> 
  );
}

export default App;
