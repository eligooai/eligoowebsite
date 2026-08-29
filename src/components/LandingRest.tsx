import Statement from './Statement';
import Department from './Department';
import { Difference, HowItWorks } from './Difference';
import AtlasFlow from './AtlasFlow';
import { WfcSection, Outcomes, HumanAI } from './Wfc';
import { Control, Integrations, Plans } from './Trust';
import { WhyNow, WhoFor, Faq, FinalCta } from './Closing';

export default function LandingRest() {
  return (
    <>
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
    </>
  );
}
