import Head from "next/head";
import Header from "../components/Header";
import BackgroundSplash from "../components/BackgroundSplash";
import StoreSection from "../components/Section/StoreSection";
import ExploreSection from "../components/Section/ExploreSection";

export default function Home() {
  return (
    <>
      <Header />
      <BackgroundSplash />
      <StoreSection />
      <ExploreSection />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
