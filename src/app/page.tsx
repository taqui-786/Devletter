import { ExternalLink, Github, Twitter } from "lucide-react";
import InputForm from "./component/InputForm";
import MemberJoined from "./component/MemberJoined";
import SnowfallBG from "./component/SnowfalBG";
import Link from "next/link";


export const siteConfig = {
  name: "Devletter",
  description: "Devletter a newsletter for dev's made with Nextjs",
  ogImage: "https://devletter.vercel.app/og-image.png",
  url: "https://devletter.vercel.app/",
}
export default function Home() {
  return (
    <main className="flex relative h-screen flex-col items-center justify-between p-20 max-sm:p-4">
      <SnowfallBG />
      <div className="h-full w-full flex justify-center items-center flex-col gap-8">
        <MemberJoined />

        <div className="flex flex-col w-full justify-center items-center gap-3">
          <h1 className="text-3xl font-bold sm:text-4xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-tr from-white to-neutral-800 capitalize max-sm:text-[1.4rem] md:max-w-3xl lg:max-w-5xl">
            Welcome To Dev&#x27;s Newsletter
          </h1>
          <p className="max-w-[750px] leading-7 text-center text-[16px] bg-clip-text text-transparent bg-gradient-to-br from-white  to-neutral-700 max-sm:text-xs">
            Join us for weekly tech News and stay ahead with the latest tech trends,
            Checkout amazing projects, Get valuable blogs and tips, and be the
            first to know about upcoming hackathons. Don&#x27;t miss out on the
            tech revolution &#x2015; Join us now and get our weekly dose of
            Devletter.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center gap-3 items-center">
          <InputForm />
          <div className="flex p-3 gap-3 text-gray-600">
            <Link href={"https://github.com/taqui-786"} target="blank">
              <Github className="h-5 w-5 hover:text-white" />
            </Link>
            <Link href={"https://twitter.com/Taquiimam14"} target="blank">
              <Twitter className="h-5 w-5 hover:text-white" />
            </Link>
            <Link href={"https://tinyurl.com/MdTaquiImam"} target="blank">
              <ExternalLink className="h-5 w-5 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
