import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import Contact from "../components/contact";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

const techStack = [
  {
    tech: "React",
    img: "/icons/react.png",
    id: 1,
  },
  {
    tech: "NextJs",
    img: "/icons/nextjs.png",
    id: 2,
  },
  {
    tech: "Javascript",
    img: "/icons/js.png",
    id: 3,
  },
  {
    tech: "Typescript",
    img: "/icons/typescript.png",
    id: 4,
  },
  {
    tech: "Node.js",
    img: "/icons/node-js.png",
    id: 5,
  },
  {
    tech: "Express.js",
    img: "/icons/express.png",
    id: 6,
  },
  {
    tech: "MongoDB",
    img: "/icons/mongodb.png",
    id: 7,
  },
  {
    tech: "PostgreSQL",
    img: "/icons/postgre.png",
    id: 8,
  },
];

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Pedro, I'm from Uruguay, and I'm a Web Developer.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tech stack</h2>
        <ul className={homeStyles.techStackList}>
          {techStack.map((element) => (
            <li
              className={`${utilStyles.listItem} ${utilStyles.listItemStack}`}
              key={element.id}
            >
              <Image
                src={element.img}
                width={100}
                height={100}
                alt={element.name}
              />
              <p>{element.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`https://www.entrematesteconte.com`} target="_blank">
              Entre mates te conté
            </Link>
            <br />
            <small className={utilStyles.lightText}>Blog site</small>
          </li>
          <li className={utilStyles.listItem}>
            <Link
              href={`https://pedrodimarco.github.io/Workspace_inicial1/index.html`}
              target="_blank"
            >
              e-Mercado
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              "Jóvenes a Programar" project
            </small>
          </li>
        </ul>
      </section>
      <Contact></Contact>
    </Layout>
  );
}
