import InputForm from "@/component/InputForm";
import MemberJoined from "@/component/MemberJoined";
import SnowfallBG from "@/component/SnowfalBG";

export default function Home() {
  return (
    <main className="flex relative h-screen flex-col items-center justify-between p-20 max-sm:p-4">
      <SnowfallBG />
      <div className="h-full w-full flex justify-center items-center flex-col gap-6">
        <MemberJoined/>
       
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <h1 className="text-3xl font-bold sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-tr from-white to-neutral-800 capitalize max-sm:text-[1.4rem] md:max-w-3xl lg:max-w-5xl">
            Welcome To Dev&#x27;s Newsletter
          </h1>
          <p className="max-w-[600px] leading-7 text-center text-[16px] bg-clip-text text-transparent bg-gradient-to-br from-white  to-neutral-700 max-sm:text-xs">
            Get weekly tech News and stay ahead with the latest tech trends,
            Checkout amazing projects, Get valuable blogs and tips, and be the
            first to know about upcoming hackathons. Don&#x27;t miss out on the
            tech revolution &#x2015; Join us now and get our weekly dose of
            Devletter.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center gap-3 items-center">
        <InputForm/>
        
        </div>
      </div>
    </main>
  );
}
