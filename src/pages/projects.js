import AnimatedText from "@/componets/AnimatedText";
import { GithubIcon } from "@/componets/Icons";
import Layout from "@/componets/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/micro-blogging.png";
import project2 from "../../public/images/projects/sorting-visualizer.png";
import project3 from "../../public/images/projects/exercise-library.png";
import project4 from "../../public/images/projects/portfolio.png";
import project5 from "../../public/images/projects/interview-system.png";
import project6 from "../../public/images/projects/ytclone.png";
import project7 from "../../public/images/projects/landingPage.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/componets/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-ful h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vh,
                (max-width: 1200px) 50vh,
                50vh"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:text-dark hover:bg-light border-2 border-dark dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-ful h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vh,
                (max-width: 1200px) 50vh,
                50vh"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold hover:underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Bhupendra Shahi | Projects Page</title>
        <meta name="description" content="Projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Micro Blogging Application"
                img={project1}
                summary="A feature-rich Micro Blogging App using NextJS, Tailwind CSS, Clerk Authentication, Uploadthing, mongoDb, webhooks. 
                User can create a post, reply, edit, delete. Create, invite and join communities. Deployed on Vercel."
                link="https://threads-peach.vercel.app/"
                github="https://github.com/BhupendraShahi/nextjs-13-threads"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Sorting Visualizer"
                img={project2}
                link="https://neon-fenglisu-5813f9.netlify.app/"
                github="https://github.com/BhupendraShahi/sorting-visualizer"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Exercise Library"
                img={project3}
                link="https://verdant-pie-9debfd.netlify.app/"
                github="https://github.com/BhupendraShahi/exercise-library"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio Website"
                img={project4}
                summary="A modern portfolio web applicaion made using NextJs, TailwindCSS, Framer Motion. It is made fully responsive using tailwind. Interactivity is added using framer motion"
                link="https://portfolio-chi-bice-92.vercel.app"
                github="https://github.com/BhupendraShahi/portfolio"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Interview Platform"
                img={project5}
                link="https://kaleidoscopic-souffle-8d5093.netlify.app/"
                github="https://github.com/BhupendraShahi/Interview-System"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MERN Youtube Clone"
                img={project6}
                link="https://bright-sorbet-4d9206.netlify.app/"
                github="https://github.com/BhupendraShahi/youtube-clone"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Landing Page Design Template"
                img={project7}
                summary="A modern landing page design made using React.js, and TailwindCSS. It is made fully responsive."
                link="https://lambent-lolly-a26324.netlify.app/"
                github="https://github.com/BhupendraShahi/nike-landing-page"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Interview Platform"
                img={project8}
                link="https://kaleidoscopic-souffle-8d5093.netlify.app/"
                github="https://github.com/BhupendraShahi/Interview-System"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Youtube Clone"
                img={project9}
                link="https://bright-sorbet-4d9206.netlify.app/"
                github="https://github.com/BhupendraShahi/youtube-clone"
                type="Featured Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
