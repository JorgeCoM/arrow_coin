import { createBrowserRouter } from "react-router-dom";

import { UserLayout } from "../layouts/UserLayout";
import StaticLayout from "../layouts/StaticLayout";
import {Dashboard, Chat, Wallet, Config, News, Store, Transfer} from "../page";
 
  const routes = createBrowserRouter([
    {
        path: "/",
        element: <StaticLayout/>,
    },
    {
      path: "/user",
      element: <UserLayout/>,
      children: [
        {
          path: '/user/chat',
          element: <Chat/>
        },
        {
          path: '/user/config',
          element: <Config/>
        },
        {
          index: true,
          element: <Dashboard/>
        },
        {
          path: '/user/transfer',
          element: <Transfer/>
        },
        {
          path: '/user/news',
          element: <News/>
        },
        {
          path: '/user/store',
          element: <Store/>
        },
        {
          path: '/user/wallet',
          element: <Wallet/>
        },
      ]
    },
  ]);

export default routes