import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface NavbarProps {
  showConnect?: Boolean;
}

export default function Navbar(props:NavbarProps): JSX.Element {
  const {showConnect} = props;
  return (
    <nav className="navbar">
      <Link href="/" className="flex">
        <span className="pr-2.5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTckvi79hEaM_vz0B9IQsd1F8H2bLxkYi79pg&usqp=CAU"
            width={20}
            height={20}
            alt="Crypto Estates Logo"
          ></Image>
        </span>
        <span>Sunflower Estates</span>
      </Link>
      { showConnect && <div className="div ml-auto"><ConnectButton /></div> }
      <div className="div ml-auto">
        
        <Link href="/docs" className="nav-link">
          Docs
        </Link>
        <Link href="/marketplace" className="nav-link">
          Marketplace
        </Link>
        <Link href="/profile" className="nav-link">
          Profile
        </Link>
      </div>
    </nav>
  );
}
