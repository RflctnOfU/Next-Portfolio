import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center m-4 sm:gap-8 gap-4">
      <div className="">
        <h1 className="sm:text-5xl text-4xl tracking-wider">
          Hi. I am{" "}
          <span className="bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent">
            Kristofer,
          </span>
        </h1>
        <h2 className="sm:text-2xl text-xl tracking-wide">
          Full Stack Web Developer with an eye
        </h2>
        <h2 className="sm:text-2xl text-xl tracking-wide">
          for harmony and a passion for elegance
        </h2>
      </div>
      <div>
        Check out my{" "}
        <Link href={"/projects"} className="ml-2">
          <button className="bg-gradient-to-r from-[#2f55a8] via-[#4343cf] to-[#6a3bb5] dark:from-[#4c76d0] dark:via-[#6767fb] dark:to-[#9866ea] bg-clip-text text-transparent border border-foreground px-2 rounded-lg">
            Projects
          </button>
        </Link>
      </div>
    </main>
  );
}
