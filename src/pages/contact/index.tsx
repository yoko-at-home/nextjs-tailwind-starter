import type { NextPage } from "next";
import { FormContact } from "src/components/FormContact";
import { FixedLayout } from "src/layout";

const About: NextPage = () => {
  return (
    <FixedLayout theme="contact">
      <FormContact />
    </FixedLayout>
  );
};

export default About;
