import Image from "next/image";
import DefaultLayout from "./layouts/DefaultLayout";

const categories = [
  {
    id: 1,
    name: "Shopping Bag",
    path: "/cotton",
    img: "/bag1.svg",
  },
  {
    id: 2,
    name: "Trend Fashion Bag",
    path: "/cotton",
    img: "/bag2.svg",
  },
  {
    id: 3,
    name: "Office Bag",
    path: "/cotton",
    img: "/bag3.svg",
  },
];

const similar_products = [
  {
    id: 1,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 2,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 3,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 4,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 5,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
  {
    id: 6,
    name: "Trend Fashion Bag",
    place: "Dhaka",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt",
  },
];

const HomePage = () => {
  return (
    <DefaultLayout>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Image
          src="/bag_banner.svg"
          alt="logo"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(24, 165, 168, 0.2)",
            zIndex: 1,
          }}
        >
          <div className="text-white w-2/3 p-20 flex flex-col gap-10 items-start">
            <div className="font-bold text-8xl ">New Collection Cotton Bag</div>
            <div>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tinciduntLorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt
            </div>
            <button className="bg-black text-primary px-10 py-3">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-10 py-20">
        <div className="text-6xl  ">Top Categories</div>
        <div className="flex flex-wrap justify-center gap-10 p-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-4  pb-5"
            >
              <div>
                <Image src={category.img} alt="logo" width={388} height={416} />
              </div>
              <div>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-10">
        <div className="w-1/2 flex flex-col items-center justify-center ">
          <Image src="/bag4.svg" alt="bag4" width={493} height={599} />
          <div className="bg-orange"></div>
        </div>
        <div className="w-1/2">
          <div className="font-bold text-8xl">
            We Create Quality Products for You Our Product Lovers
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat.
          </div>
        </div>
      </div>
      <div className="w-full  px-10 py-20">
        <div className="text-6xl  ">Similar Products</div>
        <div className="flex flex-wrap gap-10 w-full justify-center items-center p-10">
          {similar_products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 p-5 bg-secondary w-1/4"
            >
              <div className="text-xl">{product.name}</div>
              <div className="text-sm">{product.place}</div>
              <div> {product.rating}</div>
              <div>--------------</div>
              <div>{product.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  px-10 py-20">
        <div className="text-6xl  ">Testimonials</div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
