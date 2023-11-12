import { NavLink, Outlet, useHref } from "react-router-dom";
import "./UserLayout.css";
import { useSiderbar } from "../hooks";

export const UserLayout = () => {
  const router = useHref();

  const { isRouteActive, menuBarRef, sideBarRef } = useSiderbar();

  return (
    <>
      <div className="sidebar" ref={sideBarRef}>
        <a href="#" className="logo">
          <i className="bx bx-coin"></i>
          <div className="logo-name">
            <span>Arrow</span>Coin
          </div>
        </a>
        <ul className="side-menu">
          <li className={`${router === "/user" ? "active" : ""}`}>
            <NavLink to={"/user"}>
              <i className="bx bxs-dashboard"></i>Dashboard
            </NavLink>
          </li>
          <li
            className={`${isRouteActive(router) == "wallet" ? "active" : ""}`}
          >
            <NavLink to={"/user/wallet"}>
              <i className="bx bx-wallet"></i>Cartera
            </NavLink>
          </li>
          <li className={`${isRouteActive(router) === "chat" ? "active" : ""}`}>
            <div className="flex items-center w-full h-full justify-between">
              <NavLink
                to={"/user/chat"}
                className="flex items-center justify-between"
              >
                <div className="flex">
                  <i className="bx bx-chat"></i>Chat
                </div>
                <div className="flex mr-1 items-center">
                  <div className="p-1 bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">1 nuevo</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </li>
          <li className={`${isRouteActive(router) == "store" ? "active" : ""}`}>
            <NavLink to={"/user/store"}>
              <i className="bx bx-store-alt"></i>Tienda
            </NavLink>
          </li>
          <li
            className={`${isRouteActive(router) == "transfer" ? "active" : ""}`}
          >
            <NavLink to={"/user/transfer"}>
              <i className="bx bx-transfer"></i>Transferencias
            </NavLink>
          </li>
          <li className={`${isRouteActive(router) === "news" ? "active" : ""}`}>
            <div className="flex items-center w-full h-full justify-between">
              <NavLink
                to={"/user/news"}
                className="flex items-center justify-between"
              >
                <div className="flex">
                  <i className="bx bx-news"></i>Noticias
                </div>
                <div className="flex mr-1 items-center">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">2</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </li>

          <li
            className={`${isRouteActive(router) == "config" ? "active" : ""}`}
          >
            <NavLink to={"/user/config"}>
              <i className="bx bx-cog"></i>Configuración
            </NavLink>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <NavLink to={"/"} className="logout">
              <i className="bx bx-log-out-circle"></i>
              Cerrar sesión
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="main-container">
            <div className="slider-container">
              <i
                ref={menuBarRef}
                className="bx bx-left-arrow-alt slider-arrow"
              ></i>
            </div>
          <main>
              <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
