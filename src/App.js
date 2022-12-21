import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/App/Layout";

import pages from "./pages";

// import Home from "./components/Home";
// import Drawer from "./components/Drawer";
// import YTDeepLink from "./components/YTDeeplink";
// import Media from "./components/Media";
// import NestedNav from "./components/NestedNav";
// import UserDeeplink from "./components/YTDeeplink/UserDeeplink";
// import Animations from "./components/Animations";
// import Chess from "./components/Chess";

const Home = React.lazy(()=> import("./components/Home"));
const Drawer = React.lazy(()=> import("./components/Drawer"));
const YTDeepLink = React.lazy(()=> import("./components/YTDeeplink"));
const Media = React.lazy(()=> import("./components/Media"));
const NestedNav = React.lazy(()=> import("./components/NestedNav"));
const UserDeeplink = React.lazy(()=> import("./components/YTDeeplink/UserDeeplink"));
const Animations = React.lazy(()=> import("./components/Animations"));
const Chess = React.lazy(()=> import("./components/Chess"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={pages.HOME} element={<Home />} />
          <Route path={pages.DRAWER} element={<Drawer />} />
          <Route path={pages.DEEPLINK} element={<YTDeepLink />} />
          <Route path={pages.USER_DEEPLINK} element={<UserDeeplink />} />
          <Route path={pages.MEDIA} element={<Media />} />
          <Route path={pages.NESTED_NAV} element={<NestedNav />} />
          <Route path={pages.ANIMATIONS} element={<Animations />} />
          <Route path={pages.CHESS} element={<Chess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
