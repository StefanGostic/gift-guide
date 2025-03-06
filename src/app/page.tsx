import Image from "next/image";
import heroImg from "@/app/assets/gift-hero.png";
import GiftForm from "@/app/components/gift-form";

export default function Home() {
  return (
    <div className="flex w-full flex-col overflow-x-hidden justify-center items-center px-96 py-16 gap-y-10">
      <div className="flex flex-row items-center gap-x-32">
        <div className="flex flex-col gap-8 w-[500px]">
          <h1 className="text-6xl font-bold text-[#fffffe]">
            Find the Perfect Gift in Seconds!
          </h1>
          <p className="text-2xl text-[#fffffe]">
            Answer a few quick questions, and we'll suggest the best gift for
            your loved one!
          </p>
        </div>
        <Image src={heroImg} alt="hero" width={400} height={400} />
      </div>
      <GiftForm />
    </div>
  );
}
