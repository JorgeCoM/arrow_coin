import { createBrowserRouter } from "react-router-dom";

import { UserLayout } from "../layouts/UserLayout";
import StaticLayout from "../layouts/StaticLayout";
import {
  Dashboard,
  Chat,
  Soon,
} from "../page";
import { WalletLayout } from "../layouts/WalletLayout";
import { WalletMain } from "../page/wallet/WalletMain";
import { WalletCreate } from "../page/wallet/WalletCreate";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <StaticLayout />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "/user/chat",
        element: <Chat />,
      },
      {
        path: "/user/config",
        element: <Soon />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/user/transfer",
        element: <Soon />,
      },
      {
        path: "/user/news",
        element: <Soon />,
      },
      {
        path: "/user/reminders",
        element: <Soon />,
      },
    ],
  },
  {
    path: '/user/wallet',
    element: <WalletLayout/>,
    children: [
      {
        index: true,
        element: <WalletMain/>
      },
      {
        path: "/user/wallet/create",
        element: <WalletCreate/>
      }
    ]
  }
]);

export default routes;
