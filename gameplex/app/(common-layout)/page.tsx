import Games from "@/components/home/Games";
import Hero from "@/components/home/Hero";
import NextLevelGaming from "@/components/home/NextLevelGaming";
import ThreeDSwiper from "@/components/home/ThreeDSwiper";
import TopPlayer from "@/components/home/TopPlayer";
import Tournaments from "@/components/home/Tournaments";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThreeDSwiper />
      <TopPlayer />
      <Tournaments />
      <Games />
      <NextLevelGaming />
    </main>
  );
}
