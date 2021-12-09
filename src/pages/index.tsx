import type { NextPage } from "next";
import Carousel from "src/components/Carousel";
import { FixedLayout } from "src/layout";

const Home: NextPage = () => {
  return <FixedLayout theme="home">

    <Carousel/>
  </FixedLayout>;
};

export default Home;
