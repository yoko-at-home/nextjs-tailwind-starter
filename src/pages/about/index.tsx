import type { NextPage } from "next";
import { PageTitle } from "src/components/PageTitle";
import { PageSEO } from "src/components/SEO";
import { siteMetadata } from "src/data/siteMetadata";
import { FixedLayout } from "src/layout";

const data = {
  title: "タイトルです",
  address: "住所です",
  description1: "説明1",
  description2: "説明2",
};

const About: NextPage = () => {
  return (
    <div
      style={{
        background: "center/cover no-repeat url('https://source.unsplash.com/random/1600x500/?flowerg')",
      }}
      className="text-gray-100"
    >
      <FixedLayout theme="about">
        <PageSEO title={`About- ${siteMetadata.author}`} description={siteMetadata.description} />
        <div className="flex flex-col justify-between">
          <PageTitle>{data.title}</PageTitle>
          <h2 className="mb-5 text-xl font-semibold md:text-2xl lg:mb-10 lg:text-3xl">{siteMetadata.author}</h2>
          <p className="text-lg"> {data.address}</p>
          <div className="container flex pt-6 pb-8 space-y-2 md:space-y-5">
            <p className="mr-5 text-xl font-semibold whitespace-nowrap divide-y divide-gray-200">事業内容</p>
            <div className="">
              <p>{data.description1}</p>
              <p>{data.description2}</p>
            </div>
          </div>
        </div>
      </FixedLayout>
    </div>
  );
};

export default About;
