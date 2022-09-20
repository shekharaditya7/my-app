import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import YTDeepLink from "./components/YTDeepLink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/deeplink/:videoId/" element={<YTDeepLink />} />
          <Route path="/deeplink/" element={<YTDeepLink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
