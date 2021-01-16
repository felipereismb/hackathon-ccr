import React, { useEffect, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const DynamicHead = ({ titleText, description, imageUrl }) => {
  const [url, setUrl] = useState();
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <Head>
      <title>{titleText}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="brasis, cultura, jovem, ccr, empregrabilidade, educação"
      />
      <meta name="author" content="Brasis" />

      {/* <!-- Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={titleText} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={titleText} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Head>
  );
};

DynamicHead.propTypes = {
  titleText: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

DynamicHead.defaultProps = {
  titleText: "Brasis",
  description: `Nossa proposta é, um Programa de Intercâmbio de Trabalho em âmbito nacional, cujo o objetivo é a evolução pessoal, profissional e cultural do jovem, impactando também, a realidade da sociedade na qual ele está inserido.`,
  imageUrl: "https://hashmap.app/imgs/logo/H.png",
};

export default DynamicHead;
