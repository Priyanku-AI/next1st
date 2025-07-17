import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="border-2">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="mt-30 py-2 flex justify-around">
        <h1 className="text-6xl font-bold py-9">
          Mastering UI, check the spotlight!
        </h1>
      </div>
      <div className="mt-4 mx-auto text-center px-4 w-1/2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          nemo, neque cupiditate quam eligendi quos rerum quod fugiat tempore
          quas voluptatem alias veniam, cumque, vel necessitatibus? Voluptatem
          aperiam labore, delectus, odio iusto adipisci ea eaque consequuntur
          exercitationem fugiat dignissimos esse.
        </p>
      </div>
      <div className="mt-8 text-center">
        <Link href="/about">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore more
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
