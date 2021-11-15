/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import { FixedLayout } from "src/layout";

const data = [
  {
    id: 1,
    title: "1",
    description: "description1",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 2,
    title: "2",
    description: "description2",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 3,
    title: "3",
    description: "description3",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 4,
    title: "4",
    description: "description4",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 5,
    title: "5",
    description: "description5",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 6,
    title: "6",
    description: "description6",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 7,
    title: "7",
    description: "description7",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 8,
    title: "8",
    description: "description8",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
  {
    id: 9,
    title: "9",
    description: "description9",
    imgSrc: {
      background: 'center/cover no-repeat url("/static/images/twitter-card.png")',
    },
  },
];

const Product: NextPage = () => {
  return (
    <FixedLayout theme="contact">
      製品
      <div className="grid grid-cols-3 gap-5">
        {data.map((item) => {
          return (
            <div key={item.id} style={item.imgSrc} className="h-60">
              {item.title}
            </div>
          );
        })}
      </div>
    </FixedLayout>
  );
};

export default Product;
