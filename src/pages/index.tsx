import type { NextPage } from "next";
import { FormContact } from "src/components/FormContact";
import { FixedLayout } from "src/layout";

const Home: NextPage = () => {
  return (
    <FixedLayout theme="home">
      <FormContact />
    </FixedLayout>
  );
};

export default Home;
