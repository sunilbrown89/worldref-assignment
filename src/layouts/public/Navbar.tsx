import { useRouter } from "next/router";
import { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { MiddleBar } from "@/components/leadpage/home";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();
  const { asPath, push } = useRouter();
  const changeRout = (path: string) => {
    if (!path) return;
    push(path);
  };
  return (
    <nav
      className={`sticky top-0 z-[9000] transition-all duration-100 ease-in-out bg-white`}
    >
      <MiddleBar open={() => setOpenDrawer(true)} />
      <ResponsiveNavbar
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      />
    </nav>
  );
};

export default Navbar;
