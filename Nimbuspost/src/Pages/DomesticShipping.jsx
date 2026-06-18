
import Hero from '../Component/DomesticShipping/Hero';
import MovePackages from '../Component/DomesticShipping/MovePackages';
import SuccessStories from '../Component/DomesticShipping/SuccessStories';
import Features from '../Component/DomesticShipping/Features';
import RTOSolution from '../Component/DomesticShipping/RTOSolution';
import Couriersection from '../Component/DomesticShipping/Couriersection';
import Courieraggregator from '../Component/DomesticShipping/Courieraggregator';
import Nimbussection from '../Component/DomesticShipping/Nimbussection';
const DomesticShipping = () => {
  return (
    <div>
      <Hero />
      <SuccessStories />
      <MovePackages />
      <Features />
      <RTOSolution />
       <Couriersection />
      <Courieraggregator />
      <Nimbussection />

    </div>
  )
}

export default DomesticShipping