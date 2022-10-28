import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/App/Layout";

import pages from "./pages";

import Drawer from "./components/Drawer";
import YTDeepLink from "./components/YTDeeplink";
import ImageHome from "./components/Images";
import NestedNav from "./components/NestedNav";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={pages.HOME} element={<></>} />
          <Route path={pages.DRAWER} element={<Drawer />} />
          <Route path={pages.DEEPLINK} element={<YTDeepLink />} />
          <Route path={pages.IMAGE_OPERATIONS} element={<ImageHome />} />
          <Route path={pages.NESTED_NAV} element={<NestedNav />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
