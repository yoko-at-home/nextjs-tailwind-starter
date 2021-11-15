/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import { FormContact } from "src/components/FormContact";
import { FixedLayout } from "src/layout";

const About: NextPage = () => {
  return (
    <FixedLayout theme="contact">
      お問い合わせ
      <div className="flex justify-center">
        <FormContact />
      </div>
    </FixedLayout>
  );
};

export default About;
