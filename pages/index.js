import Head from "next/head";
import Header from "../components/Header";
import BackgroundSplash from "../components/BackgroundSplash";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundSplash />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
