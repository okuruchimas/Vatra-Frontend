import Head from "next/head";

interface Props {
  title: string;
  titleMeta: string;
  description: string;
  imgLink: string;
  url: string;
}

const Seo = ({ title, titleMeta, description, imgLink, url }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:title" content={titleMeta} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgLink} />
      <link rel="icon" href="/icons/favicon.svg" />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="theatrevarta.com" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={titleMeta} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgLink} />
    </Head>
  );
};

export default Seo;
