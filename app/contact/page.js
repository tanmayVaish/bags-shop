import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";

export default function Contact() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center p-20 bg-bg_gray">
        <div className="flex w-5/6 justify-between">
          <Image
            src="/contact_photo.svg"
            alt="contact"
            width={603}
            height={671}
          />
          <div className="flex flex-col gap-10 justify-between">
            <div className="text-7xl font-semibold">Get in touch with us.</div>
            <div className="flex flex-col gap-5">
              <div className="text-xl font-bold">Contact Us</div>
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
                  <label className="text-sm">
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
