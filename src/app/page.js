import GridAnimation from "@/components/GridAnimation/GridAnimation";
import Hero from "@/components/Hero/Hero";
import OurMethod from "@/components/OurMethod/OurMethod";
import Whatwedo from "@/components/WhatWeDo/Whatwedo";
import Whoweare from "@/components/WHOWEARE/Whoweare";



export default function Home() {
  return (
    <div>
      <Hero />
      <GridAnimation />
      <Whatwedo />
      <OurMethod />
      <Whoweare />
    </div>
  );
}
