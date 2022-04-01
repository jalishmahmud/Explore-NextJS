import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <h2>Hello</h2>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
