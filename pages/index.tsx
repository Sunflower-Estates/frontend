import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="header grid  grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col h-full">
          <div className="my-auto">
            <h1>Sunflower Estates</h1>
            <p>A "Sunflower Lands"-themed card-game based on Dominion.</p>
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
            src={"/img/cards/Base_Set_Goblin_Warrior.png"}
            objectFit="responsive"
            layout="cover"
            alt="Sunflower Land"
          ></Image>
        </div>
      </header>
    </>
  );
}
