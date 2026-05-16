import Card from "@/custom-components/Card";
import React from "react";

const Auctions = () => {

  const loading = false;

  const auctionItems = [
  {
    _id: 1,
    title: "MacBook Pro M3",
    category: "Electronics",
    currentBid: 1500,
    startingBid: 1000,
    image: {
      url: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    condition: "New",
    startTime: "2026-05-16",
    endTime: "2026-05-20",
  },
  {
    _id: 2,
    title: "Rolex Watch",
    category: "Luxury",
    currentBid: 5500,
    startingBid: 4000,
    image: {
      url: "https://images.pexels.com/photos/9978721/pexels-photo-9978721.jpeg"
    },
    condition: "Excellent",
    startTime: "2026-05-16",
    endTime: "2026-05-25",
  },
];

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
          <section className="my-8">
            <h1 className="text-[#21a9cb] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Auctions
            </h1>

            <div className="flex flex-wrap gap-6">
              {auctionItems.map((element) => (
                <Card
                  key={element._id}
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                />
              ))}
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default Auctions;