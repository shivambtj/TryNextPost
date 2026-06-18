
import SuccessStories from "../Component/DomesticShipping/SuccessStories";
import EcommerceSection from "../Component/EcommerceSection";
import CODPayoutSection from "../Component/CODPayoutSection";
import Performance from "../Component/Performance";
import Personalize from "../Component/Personalize";
import Channel from "../Component/Channel";
import Capabilities from "../Component/Capabilities";
import Courier from "../Component/Courier";
import HeroSlider from "../Component/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />
      
      <SuccessStories />
      <EcommerceSection />
      <CODPayoutSection />
      <Performance />
      <Personalize />
      <Channel />
      <Capabilities />
      <Courier />
    </>
  );
}