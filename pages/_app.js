import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import "../styles/style.css";
import "../styles/globals.css";

// import "../styles/styleLight.css"
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content=""
          />
    

          <link rel="shortcut icon" href="/assets/img/world-seven.jpg" />
        
        
        </Head>
      
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
