import Image from "next/image";
import DefaultLayout from "../layouts/DefaultLayout";

const team = [
  {
    id: 1,
    img: "/team.svg",
    name: "Mr. Subramanian",
    designation: "CEO",
  },
  {
    id: 2,
    img: "/team.svg",
    name: "Mr. Manikandan",
    designation: "CFO",
  },
  {
    id: 3,
    img: "/team.svg",
    name: "Mr. Madhavan",
    designation: "CTO",
  },
  {
    id: 4,
    img: "/team.svg",
    name: "Mr. Madhavan",
    designation: "COO",
  },
  {
    id: 5,
    img: "/team.svg",
    name: "Mr. Subramanian",
    designation: "Content Creator",
  },
  {
    id: 6,
    img: "/team.svg",
    name: "Mr. Manikandan",
    designation: "Software Engineer",
  },
  {
    id: 7,
    img: "/team.svg",
    name: "Mr. Madhavan",
    designation: "Software Welfare",
  },
  {
    id: 8,
    img: "/team.svg",
    name: "Mr. Madhavan",
    designation: "Dancer",
  },
];
export default function About() {
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full bg-bg_gray py-20 gap-20">
        <div className="w-4/5 mx-auto flex items-center justify-center">
          <Image src="/History.svg" alt="History" width={1191} height={601} />
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-10 text-center">
          <div className="text-black">
            Mr. Subramanian, driven by his personal struggle with unemployment,
            embarked on a mission to reduce plastic usage, create employment
            opportunities, and empower women. What began as a small venture
            named Kanimozhi Garments, in honour of his wife, has grown and
            evolved over nearly 8 years. During this time, the company has made
            significant strides in offering sustainable alternatives to plastic,
            while simultaneously uplifting local communities by providing jobs
            and promoting gender equality.
          </div>
          <div className="text-black">
            Recognizing the need for a broader impact, the company rebranded as
            Onemore, symbolizing their commitment to bringing "one more"
            positive change to the world. This new identity marked the beginning
            of their global journey, with the aim to not only reduce plastic
            waste on a larger scale but also to create a ripple effect of
            employment and empowerment across borders.
          </div>
          <div className="text-black">
            As the younger generation, we are deeply inspired by Mr.
            Subramanian’s vision. We are dedicated to taking his mission
            further—introducing innovative solutions that align with global
            sustainability goals, collaborating with international partners, and
            expanding our reach to new markets. By doing so, we strive to
            protect the environment, generate meaningful employment, and empower
            women around the world, ensuring that Onemore becomes a beacon of
            positive change on a global stage.
          </div>
        </div>
        <div className="w-4/5 mx-auto flex gap-5 flex-col md:flex-row">
          <div className="flex flex-col gap-5 items-start justify-center">
            <div className="text-5xl font-semibold text-text_quaternary">
              Eco-Friendly Cotton Bags
            </div>
            <div className="text-black">
              Our primary focus is on providing high-quality, environmentally
              friendly cotton bags. We believe in the power of sustainable
              solutions to reduce waste and promote a greener future. Each of
              our bags is crafted with care, designed to be durable, reusable,
              and gentle on the environment.
            </div>
            <button className="bg-black px-5 py-3 text-white">
              Learn More
            </button>
          </div>
          <Image src="/rectangle.svg" alt="History" width={700} height={201} />
        </div>
        <div className="w-4/5 mx-auto flex gap-5 flex-col-reverse md:flex-row">
          <Image src="/rectangle.svg" alt="History" width={700} height={201} />
          <div className="flex flex-col gap-5 items-start justify-center">
            <div className="text-5xl font-semibold text-text_quaternary">
              Empowering Women
            </div>
            <div className="text-black">
              Beyond our commitment to the environment, we are deeply dedicated
              to women empowerment. We exclusively employ women, offering them
              meaningful work opportunities that foster independence and
              economic growth. By supporting our products, you are also
              contributing to the upliftment and empowerment of women in our
              community.
            </div>
            <button className="bg-black px-5 py-3 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              'linear-gradient(to right, #18A5A8, #06DFE380, #feb47b00), url("/about_banner.svg")',
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
            backgroundRepeat: "no-repeat, no-repeat",
            minHeight: "432px",
            zIndex: 1,
          }}
        >
          <div className="text-white w-2/3 p-20 flex flex-col gap-10 items-start">
            <div className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-8xl">
              Join us in making a difference—for the planet and for women
              everywhere.
            </div>
          </div>
        </div>
        <div className="w-10/12mx-auto flex flex-col gap-5 text-center">
          <div className="text-5xl font-semibold text-text_quaternary">
            Our Team
          </div>
          <div className="flex flex-wrap justify-center gap-10 p-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 pb-5 bg-primary p-2"
              >
                <div>
                  <Image src={member.img} alt="logo" width={254} height={416} />
                </div>
                <div className="text-sm xs:text-base sm:text-lg font-bold text-black">
                  {member.name}
                </div>
                <div className="text-xs xs:text-base sm:text-sm text-text_secondary">
                  {member.designation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
