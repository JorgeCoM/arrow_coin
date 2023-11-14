import { Outlet, useHref, NavLink } from "react-router-dom";
import { CreditDisplayCards } from "../components/creditCard";
import { useSiderbar } from "../hooks";
import "./UserLayout.css";

export const WalletLayout = () => {
  const router = useHref();

  const { isRouteActive, menuBarRef, sideBarRef } = useSiderbar();

  return (
    <>
      <div className="sidebar" ref={sideBarRef}>
        <a href="#" className="logo">
          <i className="bx bx-coin"></i>
          <div className="logo-name">
            <span>FI</span> SO
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
                  {/* <div className="p-1 px-2 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Soon</span>
                  </div> */}
                </div>
              </NavLink>
            </div>
          </li>
          <li
            className={`${
              isRouteActive(router) === "reminders" ? "active" : ""
            }`}
          >
            <div className="flex items-center w-full h-full justify-between">
              <NavLink
                to={"/user/reminders"}
                className="flex items-center justify-between"
              >
                <div className="flex">
                  <i className="bx bx-calendar"></i>Recordatorios
                </div>
                <div className="flex mr-1 items-center">
                  <div className="p-1 px-2 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Soon</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </li>
          {/* <li
            className={`${
              isRouteActive(router) === "transfer" ? "active" : ""
            }`}
          >
            <div className="flex items-center w-full h-full justify-between">
              <NavLink
                to={"/user/transfer"}
                className="flex items-center justify-between"
              >
                <div className="flex">
                  <i className="bx bx-transfer"></i>Transferencias
                </div>
                <div className="flex mr-1 items-center">
                  <div className="p-1 px-2 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Soon</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </li> */}
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
                  <div className="p-1 px-2 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Soon</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </li>

          <li
            className={`${isRouteActive(router) === "config" ? "active" : ""}`}
          >
            <div className="flex items-center w-full h-full justify-between">
              <NavLink
                to={"/user/config"}
                className="flex items-center justify-between"
              >
                <div className="flex">
                  <i className="bx bx-cog"></i>Configuración
                </div>
                <div className="flex mr-1 items-center">
                  <div className="p-1 px-2 bg-yellow-500 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">Soon</span>
                  </div>
                </div>
              </NavLink>
            </div>
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
          <div className="w-full h-screen bg-[#25252c] grid p-4 grid-cols-12">
            <div className="col-span-4">
              <CreditDisplayCards />
            </div>
            <div className="flex flex-col col-span-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
