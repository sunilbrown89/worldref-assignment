/* eslint-disable @next/next/no-img-element */
import { AdminLogin } from "@/components/leadpage";
import { PublicLayout } from "@/layouts";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{"WorldRef Admin Login" || "Loading..."}</title>
        <meta
          name="description"
          content="Blog Application for sharing content with community"
        />
        <meta property="og:image" content={""} />
      </Head>
      <PublicLayout title="WorldRef Login">
        <section className="">
          <AdminLogin />
        </section>
      </PublicLayout>
    </>
  );
}
