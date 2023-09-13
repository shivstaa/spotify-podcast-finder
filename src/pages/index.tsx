import React from "react";
import ImageSlider from "./components/imageSlider";
import MagnifyingGlass from "./components/magnifyingGlass";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
const DynamicParticlesBg = dynamic(() => import("particles-bg"), {
  ssr: false,
});

var imageSet: string[] = [];


for (var i = 1; i <= 21; i++) {
  imageSet.push(`/podcast_image${i}.jpg`)
}

export default function Home() {
  return (
    <main className="pb-8 md:pb-6 h-full">
      {/* Initial section */}
      <div
  className="bg-black"
  style={{
    backgroundImage: `
  linear-gradient(to bottom right, #000000, 25%, transparent),
  linear-gradient(to top right, #000000, 25%, transparent),
  linear-gradient(to top left, transparent 5%, #6B21A8, 80%, #000000)`,
  }}
>
  <Navbar />

  <section className="flex flex-row items-center justify-between mx-auto w-full  h-[50vh]">
    {/* Left side */}
    <div className="flex-grow mr-8 items-center text-center">
      {/* text-2xl sm:text-3xl md:text-4xl  */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed font-sans mb-8">
        Find the perfect audiobook to listen to
      </h1>
      {/* text-md sm:text-lg mb-4 */}
      <p className="
      text-xl sm:text-2xl leading-10 font-serif mb-8">
        Discover a wide collection of audiobooks curated just for you.
      </p>
      <Link href={'/find'}>
      <button className="bg-purple-500 hover:bg-purple-600 text-white text-xl py-2 px-4 rounded">
        Browse Collection
      </button>
      </Link>
    </div>

    {/* Right side */}
    <div className="flex flex-baseline">
      <div
        className="relative rounded-full overflow-hidden"
      >
        <Image src="/micImageCover.png" alt={"mic_img"} width={500} height={500} />
      </div>
    </div>
  </section>
</div>


      {/* <hr className="bg-gray-500 h-1.5 rounded-md opacity-50 mx-auto" /> */}

      <section className="flex w-full h-[50vh] items-center bg-black"
      style={{
        backgroundImage: `
        linear-gradient(to top left, #000000, 83%, transparent),
        linear-gradient(to top right, #000000, 25%, transparent),
        linear-gradient(to top left, transparent 25%, #6B21A8, 88%, #000000)`,
  // linear-gradient(to top left, transparent 5%, rgba(247,145,0,1), 80%, #000000)
  }}>
        <div className="w-2/5 pl-12">
          <ImageSlider rtl={false} images={imageSet.slice(0, 7)} />
          <ImageSlider rtl={true} images={imageSet.slice(7, 14)} />
          <ImageSlider rtl={false} images={imageSet.slice(14, 22)} />
        </div>
        <div className="w-3/5 px-8 flex flex-col text-left justify-center">
          <h1 className="pb-8 text-5xl sm:text-6xl md:text-7xl font-bold leading-relaxed font-sans">
            1000+ Podcasts to Search
          </h1>
          <p className="text-xl sm:text-2xl leading-10 font-serif">
            From comedies, celebrity personalities, science & technology, to the
            scariest horror stories!
          </p>
        </div>
      </section>

      <hr className="bg-gray-500 h-1.5 my-8 rounded-md opacity-50 mx-auto" />


      <section className="relative flex  w-full h-56 justify-center items-center">
        <div className="flex flex-col text-center justify-center z-10">
          <h1 className="pb-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed font-sans">
            Find the perfect audiobook to listen to
          </h1>
        </div>
        <DynamicParticlesBg
          type="custom"
          config={{
            num: [1, 3],
            rps: 0.1,
            radius: [50, 100],
            life: [1.5, 3],
            v: [0.5, 1],
            tha: [-40, 40],
            alpha: [0.6, 0],
            scale: [0.1, 0.4],
            position: "all",
            color: ["#6B21A8"],
            cross: "dead",
            random: 15,
            g: 2,
          }}
          bg={true}
        />
      </section>

      <hr className="bg-gray-500 h-1.5 rounded-md opacity-50 mx-auto" />

      <section className="flex mt-8 w-full h-[35vh]">
        <div className="w-1/2 px-8 flex flex-col text-right justify-center">
          <h1 className="pb-8 text-5xl sm:text-6xl md:text-7xl font-bold leading-relaxed font-sans">
            1000+ Podcasts to Search
          </h1>
          <p className="text-xl sm:text-2xl leading-10 font-serif">
            From comedies, celebrity personalities, science & technology, to the
            scariest horror stories!
          </p>
        </div>
        <div className="relative w-1/2">
          <MagnifyingGlass />
        </div>
      </section>

      <hr className="bg-gray-500 h-1.5 rounded-md opacity-50 mx-auto" />

      {/* <section className="flex mt-8 w-full h-[50vh]">
        <div className="w-2/5 pl-12">
          <ImageSlider rtl={false} images={imageSet.slice(0, 7)} />
          <ImageSlider rtl={true} images={imageSet.slice(7, 14)} />
          <ImageSlider rtl={false} images={imageSet.slice(14, 22)} />
        </div>
        <div className="w-3/5 px-8 flex flex-col text-left justify-center">
          <h1 className="pb-8 text-5xl sm:text-6xl md:text-7xl font-bold leading-relaxed font-sans">
            1000+ Podcasts to Search
          </h1>
          <p className="text-xl sm:text-2xl leading-10 font-serif">
            From comedies, celebrity personalities, science & technology, to the
            scariest horror stories!
          </p>
        </div>
      </section> */}
    </main>
  );
}
