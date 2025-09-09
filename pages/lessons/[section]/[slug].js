import { useContext, useEffect } from "react";
import Head from "next/head";
import { getLesson, getLessons } from "../../../data/lesson";
import getCourseConfig from "../../../data/course";
import Corner from "../../../components/corner";
import { Context } from "../../../context/headerContext";
import createCopyCodeFunctionality from "../../../data/copyCode";
import Link from "next/link";

export default function LessonSlug({ post }) {
  const courseInfo = getCourseConfig();
  const [_, setHeader] = useContext(Context);

  let nextLink, prevLink;
  if (post.nextSlug) {
    const shortNextSlug = post.nextSlug.replace(/^.*?\\.*?(?=\\)/, "");
    nextLink = shortNextSlug.replace(/\\/g, "/");
  }
  if (post.prevSlug) {
    const shortPrevSlug = post.prevSlug.replace(/^.*?\\.*?(?=\\)/, "");
    prevLink = shortPrevSlug.replace(/\\/g, "/");
  }

  useEffect(() => {
    setHeader({
      section: post.section,
      title: post.title,
      icon: post.icon,
    });
    let elementsToClean = createCopyCodeFunctionality();
    return () => {
      setHeader({});
      elementsToClean = [];
    }
  }, []);

  const title = post.title
    ? `${post.title} – ${courseInfo.title}`
    : courseInfo.title;
  const description = post.attributes.description
    ? post.attributes.description
    : courseInfo.description;

  const keywords = post.attributes.keywords
    ? post.attributes.keywords
    : courseInfo.keywords;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords.join(",")}></meta>
        <meta name="og:description" content={description}></meta>
        <meta name="og:title" content={title}></meta>
        <meta
          name="og:image"
          content={`${process.env.BASE_URL}/images/social-share-cover.jpg`}
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className="lesson-container">
        <div className="lesson">
          <div
            className="lesson-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="lesson-links">
            {prevLink ? (
              <Link href={prevLink} className="prev">
                ← Previous
              </Link>
            ) : null}
            {nextLink ? (
              <Link href={nextLink} className="next">
                Next →
              </Link>
            ) : null}
          </div>
        </div>
        <Corner />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getLesson(params.section, params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const sections = await getLessons();
  const lessons = sections.map((section) => section.lessons);
  const slugs = lessons.flat().map((lesson) => lesson.fullSlug);

  return { paths: slugs, fallback: false };
}
