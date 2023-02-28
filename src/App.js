import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Cookies from "js-cookie";
import Layout from "./components/App/Layout";

import pages from "./pages";

import Home from "./components/Home";
import Drawer from "./components/Drawer";
import YTDeepLink from "./components/YTDeeplink";
import Media from "./components/Media";
import NestedNav from "./components/NestedNav";
import UserDeeplink from "./components/YTDeeplink/UserDeeplink";
import Animations from "./components/Animations";
import Chess from "./components/Chess";
import Chat from "./components/Chat";
import Auth from "./components/Auth";

function App() {
  const [authData, setAuthData] = useState({});

  /*
  We will use login Status API once the set-cookie issue is resolved
  */
  // const { data, error, loading } = useFetch(
  //   "http://localhost:5000/api/auth/login-status"
  // );

  const handleLoginClick = async ({ email, password }) => {
    if (!email || !password) return;
    setAuthData({});
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data) {
      setAuthData(data);
      setTimeout(() => {
        setAuthData((prevData) => {
          return { ...prevData, message: "" };
        });
      }, 2000);
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({});
  };

  const handleSignupClick = async ({ name, email, password }) => {
    if (!email || !name || !password) return;
    setAuthData({});
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if (data) {
      setAuthData(data);
      setTimeout(() => {
        setAuthData((prevData) => {
          return { ...prevData, message: "" };
        });
      }, 2000);
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({});
  };

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
          <Route path={pages.CHAT} element={<Chat />} />
          <Route
            path={pages.AUTH}
            element={
              <Auth
                handleLoginClick={handleLoginClick}
                handleSignupClick={handleSignupClick}
                authApiError={authData?.message}
              />
            }
          />
          {/* Fallback for LinkedIn post */}
          <Route path={"/deeplink/"} element={<YTDeepLink />}></Route>
          <Route path={"*"} element={<Navigate to="/" />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
