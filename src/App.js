import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/App/Layout";

import pages from "./pages";

import Home from "./components/Home";
import Drawer from "./components/Drawer";
import YTDeepLink from "./components/YTDeeplink";
import ImageHome from "./components/Images";
import NestedNav from "./components/NestedNav";
import UserDeeplink from "./components/YTDeeplink/UserDeeplink";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={pages.HOME} element={<Home />} />
          <Route path={pages.DRAWER} element={<Drawer />} />
          <Route path={pages.DEEPLINK} element={<YTDeepLink />} />
          <Route path={pages.USER_DEEPLINK} element={<UserDeeplink />} />
          <Route path={pages.IMAGE_OPERATIONS} element={<ImageHome />} />
          <Route path={pages.NESTED_NAV} element={<NestedNav />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
