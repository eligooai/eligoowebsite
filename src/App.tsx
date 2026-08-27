import Loader from './components/Loader';
import Nav from './components/Nav';
import HeroCinematic from './components/HeroCinematic';
import Statement from './components/Statement';
import Department from './components/Department';
import { Difference, HowItWorks } from './components/Difference';
import AtlasFlow from './components/AtlasFlow';
import { WfcSection, Outcomes, HumanAI } from './components/Wfc';
import { Control, Integrations, Plans } from './components/Trust';
import { WhyNow, WhoFor, Faq, FinalCta } from './components/Closing';

export default function App() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <HeroCinematic />
        <Statement />
        <Department />
        <HowItWorks />
        <AtlasFlow />
        <Difference />
        <Outcomes />
        <HumanAI />
        <Control />
        <Integrations />
        <Plans />
        <WfcSection />
        <WhyNow />
        <WhoFor />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
