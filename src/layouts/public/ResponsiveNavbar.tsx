/* eslint-disable @next/next/no-img-element */
import { ICONS } from "@/assets";
import { Drawer } from "@/components/core";
import { useTabsStore } from "@/hooks";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";

const ResponsiveNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { push } = useRouter();

  const {
    manageLogin,
    setManageLogin,
    manageUserLoginName,
    setManageUserLoginName,
  } = useTabsStore();

  useEffect(() => {
    setManageLogin(manageLogin);
    setManageUserLoginName(manageUserLoginName);
  }, [
    manageLogin,
    setManageLogin,
    manageUserLoginName,
    setManageUserLoginName,
  ]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure want to Logout?",
      // text: "Want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout!", "Logged out successfully!", "success");
        setManageLogin(false);
        setManageUserLoginName("");
        push("/");
      }
    });
  };
  return (
    <Drawer
      open={open}
      onClose={() => onClose()}
      anchor="left"
      drawerStyle="w-[15rem] h-screen"
    >
      <div className="w-full flex flex-col h-full py-2 md:py-4">
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex justify-between items-center w-full  -mt-2 pb-1 -md:pt-2 px-4 md:px-5 border-b border-primary/30">
            <div className="flex flex-row gap-5">
              <Link href="/">
                <h1 className="font-semibold text-lg py-5">WORLDREF</h1>
              </Link>
              {manageLogin && manageUserLoginName && (
                <Avatar className="mt-3.5" sx={{ bgcolor: "#0b6efd" }}>
                  {manageUserLoginName.charAt(0).toUpperCase()}
                </Avatar>
              )}
            </div>
            <button className="text-xl text-primary" onClick={() => onClose()}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={`flex flex-col w-full gap-3 px-5 `}>
            <p onClick={() => push("/")}>HOME</p>
            {manageLogin && manageUserLoginName ? (
              <div className=" flex flex-row gap-4">
                <p onClick={handleLogout} className="mt-2.5 cursor-pointer">
                  LOGOUT
                </p>
              </div>
            ) : (
              <Link href="/login">
                <p>LOGIN</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ResponsiveNavbar;
