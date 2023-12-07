import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
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
      <div>
        <Link
            href="https://www.linkedin.com/in/ankushmahanty/"
            className="px-2 font-light text-right"
        >
            Reach out to me on LinkedIn!
        </Link>
        <Link
            href=""
            className="px-2 font-light"
        >
            Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
