//@ts-nocheck
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
