import { useEffect, useRef } from "react";

export const useSiderbar = () => {

  const sideLinksRef = useRef([]);
  const menuBarRef = useRef(null);
  const sideBarRef = useRef(null);

  const isRouteActive = (route) => {
    if (route) {
      const segments = route.split("/");

      const userIndex = segments.indexOf("user");

      if (userIndex !== -1 && userIndex < segments.length - 1) {
        const afterUser = segments[userIndex + 1];
        return afterUser;
      } else if (segments.length === 2 && segments[1] === "user") {
        return true;
      }
    }
    return false;
  };

  const handleItemClick = (item) => {
    const li = item.parentElement;
    sideLinksRef.current.forEach((i) => {
      item.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  };

  useEffect(() => {

    document.body.classList.add("dark");

    sideLinksRef.current.forEach((item) => {
        item.addEventListener("click", handleItemClick);
      });

    const handleMenuBarClick = () => {
      sideBarRef.current.classList.toggle("close");
      if (sideBarRef.current.classList.contains("close")) {
        menuBarRef.current.classList.replace(
          "bx-left-arrow-alt",
          "bx-right-arrow-alt"
        );
      } else {
        menuBarRef.current.classList.replace(
          "bx-right-arrow-alt",
          "bx-left-arrow-alt"
        );
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        sideBarRef.current.classList.add("close");
      } else {
        sideBarRef.current.classList.remove("close");
      }
    };

    sideLinksRef.current.forEach((item) => {
      item.addEventListener("click", handleItemClick);
    });

    menuBarRef.current?.addEventListener("click", handleMenuBarClick);

    return () => {
        sideLinksRef.current.forEach((item) => {
            item.removeEventListener("click", handleItemClick);
          });
      menuBarRef.current?.removeEventListener("click", handleMenuBarClick);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return {
    isRouteActive,
    menuBarRef,
    sideBarRef,
  };
};
