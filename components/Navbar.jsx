import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
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
    </nav>
  )
}
