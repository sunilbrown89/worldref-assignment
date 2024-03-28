import { BlogData } from "@/components/Blog/Home/AllBlogs";
import { PublicLayout } from "@/layouts";
import { useRouter } from "next/router";

const ProjectDetails = () => {
  const projectID = useRouter().query;

  const BlogDetailsData = BlogData.find(
    (item: any) => item?.id === projectID?.[`blog-details`]
  );
  console.log("BlogDetailsData-->", BlogDetailsData);
  // useEffect(() => {
  //   const detailsData = BlogData.find(
  //     (item: any) => item?.id === projectID?.[`project-details`]
  //   );
  //   // console.log(totalProjectdata[0]);
  //   if (detailsData) setFilterData({ ...detailsData });
  // }, [projectID]);

  return (
    <PublicLayout title="Project Details">
      <section className="main-container">
        <div className="flex justify-center items-center  rounded-md w-full my-10">
          <div className="bg-white w-full md:w-2/5 p-4 flex flex-col gap-4 border-2 border-gray-400">
            <div>
              <p>Title:</p>
              <p className="text-MainTheme uppercase font-semibold text-md">
                {BlogDetailsData?.maintitle}
              </p>
            </div>
            <div>
              <p>Description:</p>
              <h1 className="text-[#13223c] font-semibold text-xl">
                {BlogDetailsData?.title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default ProjectDetails;
