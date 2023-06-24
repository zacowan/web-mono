import { Rubik } from "next/font/google";
import { clsx } from "clsx";
import { Skills } from "../components/Skills";
import Image from "next/image";

const LINKEDIN_HREF = "https://www.linkedin.com/in/zacowan";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-cyan-500 to-blue-500 left-0 right-0 top-0 bottom-0 absolute flex flex-col justify-between">
      <div className="h-1/3 my-auto">
        <div className="relative w-full h-full">
          <Image
            className="object-contain"
            src="/smile_profile.png"
            alt="Zach"
            fill
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-t-xl p-10 flex flex-col justify-between max-w-prose space-y-6">
          <div className="space-y-2">
            <h1 className="uppercase font-bold text-3xl">Zach Cowan</h1>
            <p className={clsx("text-gray-500 block", rubik.className)}>
              Software engineer with an interest in design.
            </p>
            <div className="space-y-2">
              <h2 className="uppercase">Skills</h2>
              <Skills />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="link">
              Learn More
            </a>
            <a href={LINKEDIN_HREF} className="link-cta">
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
