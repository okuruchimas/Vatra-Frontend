import Head from "next/head";

interface Props {
  title: string;
  titleMeta: string;
  description: string;
  imgLink: string;
}

const Seo = ({ title, titleMeta, description, imgLink }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={titleMeta} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgLink} />
      <link rel="icon" href="/icons/favicon.svg" />
    </Head>
  );
};

export default Seo;
