import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* left */}
      <div className="flex space-x-2 items-center ">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          height={30}
          width={30}
        />

        <h1 className="font-bold">
          asterix. <span className="text-violet-500">AI</span> Image Generator
        </h1>
        <h2 className="text-xs">
          Powered by DALL-E 3, ChatGPT & Microsoft Azure!
        </h2>
      </div>

      {/* right */}
      <div className="flex text-xs md:text-base divide-x items-center">
        <Link
            href="https://www.linkedin.com/in/ankushmahanty/"
            className="px-2 font-light text-right"
        >
            Find me on <span className="text-blue-500">LinkedIn</span>!
        </Link>
        <Link
            href="https://github.com/ankush170/image-generator-dalle3"
            className="px-2 font-light text-gray-500"
        >
            Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
