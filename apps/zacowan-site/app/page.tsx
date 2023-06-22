import { Button, Header } from "ui";
import { Rubik } from "next/font/google";
import { clsx } from "clsx";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <div className="bg-blue-600 left-0 right-0 top-0 bottom-0 absolute">
      <div className="h-1/2">Image</div>
      <div className="bg-white h-1/2 rounded-t-xl p-10 space-y-2">
        <h1 className="uppercase font-bold text-3xl">Zach Cowan</h1>
        <p className={clsx("text-gray-500 block", rubik.className)}>
          Software engineer with an interest in design.
        </p>
        <div>
          <h2 className="uppercase">Skills</h2>
        </div>
      </div>
    </div>
  );
}
