import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import YTDeepLink from "./components/YTDeepLink";
import ImageHome from "./components/Images";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/drawer/" element={<Drawer />} />
          <Route path="/deeplink/:videoId/" element={<YTDeepLink />} />
          <Route path="/deeplink/" element={<YTDeepLink />} />
          <Route path="/images/" element={<ImageHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
