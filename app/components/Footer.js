import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="sticky-component bottom-0">
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
      </div>
      <div className=""></div>
    </div>
  );
}
