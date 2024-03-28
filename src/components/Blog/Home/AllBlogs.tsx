import React, { useEffect } from "react";
import Title from "./Title";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useTabsStore } from "@/hooks";

const AllBlogs = () => {
  const router = useRouter();
  const success = useRouter().query.success;

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

  console.log("manageLogin--->", manageLogin);
  const handleCheckDetails = (itemId: string) => {
    if (manageLogin) {
      router.push(`/blogs/${itemId}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Please login",
        text: "You need to login to view blog details.",
      });
    }
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url("about/newPage/home-1-service-background.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full w-full pt-10 pb-10 bg-[#f9f9f9e5]">
        <div className="main-container">
          <div>
            <Title
              text="Blogs"
              classNames="flex justify-center items-center "
              mainTitle="All Blogssssss"
            />
          </div>
          {/*  ---------------------Ongoing 0------------------------------*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 lg:mt-7 ">
            {BlogData?.map((item) => (
              <div
                key={item?.id}
                className="group border-2 border-gray-400 rounded-sm"
              >
                <div className="bg-white  w-full p-4 flex flex-col gap-4">
                  <div>
                    <p>Title:</p>
                    <p className="text-MainTheme uppercase font-semibold text-md">
                      {item?.maintitle}
                    </p>
                  </div>
                  <div>
                    <p>Description:</p>
                    <h1 className="text-[#13223c] font-semibold text-xl">
                      {item?.title}
                    </h1>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center">
                    <button
                      className="border-2 border-gray-400 rounded-md p-2 uppercase hover:bg-blue-300 "
                      onClick={() => handleCheckDetails(item?.id)}
                    >
                      Check Details
                    </button>
                    <button className="border-2 border-gray-400 rounded-md p-2 uppercase hover:bg-orange-200 ">
                      Add in watchlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

export const BlogData = [
  {
    id: "RB23",
    location: "Mopa, Goa",
    startdate: "December 2021",
    status: "Ongoing",
    title:
      "Blog-1     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam voluptatibus r",
    img: "/newProImages/ongoing/Mopa/Mopa-Ongoing.png",
    maintitle: "Blog 1",
  },
  {
    id: "RB8",
    location: "Sankeshwar, Karnataka",
    startdate: "February 2022",
    status: "Ongoing",
    img: "/newProImages/ongoing/Sankeshwar/Sankeshwar-Featured-Pic-2.jpeg",
    title:
      "Blog 2 ipsum dolor sit amet consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam",
    maintitle: "Blog 2",
  },
  {
    id: "RB14",
    location: "Gujrat",
    startdate: "Nov 2020",
    status: "Ongoing",
    title:
      "Blog 3 No. consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam",
    img: "/newProImages/ongoing/Gujarat/HSR1CFeatured Image123.JPG",
    maintitle: "Blog 3",
  },
  {
    id: "RB23dcd",
    location: "Mopa, Goa",
    startdate: "December 2021",
    status: "Ongoing",
    title:
      "Blog-6     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam voluptatibus r",
    img: "/newProImages/ongoing/Mopa/Mopa-Ongoing.png",
    maintitle: "Blog 6",
  },
  {
    id: "RB8dcds",
    location: "Sankeshwar, Karnataka",
    startdate: "February 2022",
    status: "Ongoing",
    img: "/newProImages/ongoing/Sankeshwar/Sankeshwar-Featured-Pic-2.jpeg",
    title:
      "Blog 4 ipsum dolor sit amet consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam",
    maintitle: "Blog 4",
  },
  {
    id: "RB14cdc",
    location: "Gujrat",
    startdate: "Nov 2020",
    status: "Ongoing",
    title:
      "Blog 45 No. consectetur adipisicing elit. Amet iure aut odit quibusdam totam! Natus sunt veniam",
    img: "/newProImages/ongoing/Gujarat/HSR1CFeatured Image123.JPG",
    maintitle: "Blog 45",
  },
];
// const abc=()=>{
//   return (
//     <div
//       className=""
//       style={{
//         backgroundImage: `url("about/newPage/home-1-service-background.png")`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="h-full w-full pt-10 pb-10 bg-[#f9f9f9e5]">
//         <div className="main-container">
//           <div>
//             <Title
//               text="Blogs"
//               classNames="items-center "
//               mainTitle="Ongoing Projects"
//             />
//           </div>
//           {/*  ---------------------Ongoing 0------------------------------*/}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 lg:mt-7 ">
//             {data?.map((item) => (
//               <div
//                 key={item?.id}
//                 className="group"
//                 onClick={() => {
//                   router.push(`/projects/${item?.id}`);
//                 }}
//               >
//                 <div className="h-[300px] relative">
//                   <img
//                     src={item?.img}
//                     alt=""
//                     className="object-cover object-center h-full w-full"
//                   />
//                   <div className="bg-MainTheme group-hover:right-0 transition-all ease-out duration-500 cursor-pointer h-12 text-white bottom-2 right-7 w-12 flex justify-center items-center absolute rounded-full">
//                     <BiRightArrowAlt size={27} />
//                   </div>
//                 </div>
//                 <div className="bg-[#13223c]  w-full p-5 h-[200px]">
//                   <p className="text-MainTheme uppercase font-semibold text-sm">
//                     {item?.maintitle}
//                   </p>
//                   <h1 className="text-white font-bold text-2xl pt-2">
//                     {item?.title}
//                   </h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-5 md:flex-row flex-col gap-9">
//             <img
//               src="/about/newPage/arrow-view-all.png"
//               alt=""
//               className=" w-20 hidden lg:block"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
