/* eslint-disable @next/next/no-img-element */
import { ICONS } from "@/assets";
import { useTabsStore } from "@/hooks";
import { Avatar } from "@mui/material";
import Link from "next/link";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Swal from "sweetalert2";

const NormalNavbar = ({ open }: { open: () => void }) => {
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
    <div className="w-full">
      <section className="bg-blue-600 hidden lg:flex w-full ">
        <div className="main-container w-full  bg-blue-600 flex flex-row gap-12 justify-between text-white">
          {/* -------------------------img div----------------------- */}
          <div className="-ml-2.5">
            <Link href="/">
              <h1 className="font-semibold text-lg py-5">WORLDREF</h1>
            </Link>
          </div>
          {/* -------------------------menu div----------------------- */}
          <div className="w-full  flex flex-row justify-end">
            <ul className="flex  items-center gap-20 text-sm font-semibold ">
              {menusArray?.map((item: any) => (
                <>
                  {!item?.subMenu ? (
                    <li className={`cursor-pointer flex `}>
                      <h1
                        className="hover:text-MainTheme font-semibold"
                        onClick={() => push(item?.link)}
                      >
                        {item?.title}
                      </h1>
                    </li>
                  ) : (
                    <li className="group relative cursor-pointer flex py-6">
                      <h1 className="font-semibold">{item?.title}</h1>
                      <span className="pt-0.5 text-green-black">
                        <ICONS.DropDownIcon />
                      </span>
                      <div className=" origin-top-left invisible  group-hover:visible transition-all ease-in-out duration-200 scale-0 group-hover:scale-100 flex flex-col absolute z-10 top-full left-0 bg-white rounded-md w-60 h-fit border-2 cursor-pointer">
                        {item?.subMenu?.map((subItem: any) => (
                          <Link href={subItem?.link} key={subItem?.id}>
                            <p className="p-2 hover:bg-gray-100  text-gray-600 font-medium text-[15px]">
                              {subItem?.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </li>
                  )}
                </>
              ))}

              {manageLogin ? (
                <div className=" flex flex-row gap-4">
                  <p onClick={handleLogout} className="mt-2.5 cursor-pointer">
                    LOGOUT
                  </p>

                  <Avatar sx={{ bgcolor: "#0b6efd" }}>
                    {manageUserLoginName.charAt(0).toUpperCase()}
                  </Avatar>
                  {/* <img src="" alt="" /> */}
                </div>
              ) : (
                <Link href="/login">
                  <p>LOGIN</p>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </section>
      <div className="main-container -ml-2 bg-blue-600 shadow-sm border-t border-gray-400 text-2xl cursor-pointer lg:hidden  flex items-center justify-between text-[#211c55] py-2.5">
        <Link href="/">
          <h1 className="font-semibold text-lg py-3 ml-3">WORLDREF</h1>
        </Link>
        <div onClick={open}>
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default NormalNavbar;

export const menusArray = [
  {
    id: 1,
    title: "BLOGS",
    link: "/",
    // subMenu: [
    //   { id: 11, title: "C Blogs", link: "/completed-blogs" },
    //   { id: 12, title: "O Blogs", link: "/ongoing-blogs" },
    // ],
  },
  // { id: 7, title: "LOGIN", link: "/career" },
];
