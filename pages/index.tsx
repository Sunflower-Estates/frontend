import Image from "next/image";
import Link from "next/link";

import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="header grid  grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col h-full">
          <div className="my-auto">
            <h1>Sunflower Estates</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis nibh ut augue bibendum tempor. Nam consequat, libero id
              facilisis tempor, nisl urna ultricies dolor, ac finibus quam justo
              eget.
            </p>
            <div className="flex flex-grow">
              <span className="btn">
                <Link href="/demo">Demo</Link>
              </span>
              <span className="btn">Docs</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            width={500}
            height={750}
            src={"https://sunflower-land.com/assets/landing.4e1310ef.png"}
            objectFit="responsive"
            layout="cover"
            alt="Sunflower Land"
          ></Image>
        </div>
      </header>
    </>
  );
}
