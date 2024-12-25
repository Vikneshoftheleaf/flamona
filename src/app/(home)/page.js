import Image from "next/image";
import banner from "@/images/hero-banner.png"
import Link from "next/link";

export const metadata = {
  "title": "Flamona"
}
export default function Home() {
  return (
    <div class=" h-screen flex justify-center items-center">

      <div class="grid grid-col-1 lg:grid-cols-2 lg:gap-8 lg:m-20 m-5 gap-2">

        <div class="col flex justify-center items-center">
          <Image src={banner} height={500} width={500} alt="banner-image"/>
        </div>

        <div class="col flex flex-col justify-center items-center gap-2">
          <div class="text-5xl lg:text-8xl font-black text-sky-900 lg:p-0 px-4">Welcome To Flamono!</div>

          <div class="p-4 bg-white rounded-[8px] flex flex-col w-full gap-4">
            <Link href={'/flames'} class="px-4 py-2 bg-sky-200 text-sky-900 text-2xl font-bold rounded-[8px] flex justify-between  items-center shadow-md shadow-sky-100"><span>Flame Finder </span><i class="fa-solid fa-arrow-right float-right"></i></Link>
            <Link href={'/love-calculator'} class="px-4 py-2 bg-pink-200 text-pink-900 text-2xl font-bold rounded-[8px] flex justify-between items-center shadow-md shadow-pink-100">Love Calculator <i class="fa-solid fa-arrow-right float-right"></i></Link>

          </div>

        </div>

      </div>

    </div>
  );
}
