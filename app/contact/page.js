import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";

export default function Contact() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center lg:p-10 p-5 bg-bg_gray w-full">
        <div className="flex justify-between lg:max-w-[1400px]">
          <div className="w-1/2 p-10 hidden lg:block">
            <Image
              src="/contact_photo.svg"
              alt="contact"
              width={603}
              height={671}
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-10 justify-between p-2 lg:p-10">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-black">
              Get in touch with us.
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-black text-lg lg:text-xl font-bold">
                Contact Us
              </div>
              <form className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-5 border border-border_primary rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-5 border border-border_primary rounded-lg"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-5 border border-border_primary rounded-lg"
                  rows={10}
                ></textarea>

                <div className="flex gap-2 mb-10">
                  <input type="checkbox" className="w-5 h-5" />
                  <label className="text-sm text-black">
                    I agree to the privacy policy
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full p-5 bg-black text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
