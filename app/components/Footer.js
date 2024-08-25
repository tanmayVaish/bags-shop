import Image from "next/image";

export default function Footer() {
  return (
    <div className="sticky-component bottom-0 bg-primary p-10 flex w-full justify-center">
      <div className="w-1/3 flex flex-col gap-10">
        <Image src="/logo.svg" width={315} height={71} alt="logo" />
        <div>
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li.
        </div>
      </div>
      <div className="w-2/3 flex justify-center">
        <div className="w-1/2 flex justify-center">
          <div>Quick Links</div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  );
}
