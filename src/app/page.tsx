import { Banner } from "@/components/Banner";
import { ClientRating } from "@/components/ClientRating";
import { ContractorList } from "@/components/ContractorList";
import { CTA } from "@/components/CTA";
import { Services } from "@/components/Services";
import { ServicesMobile } from "@/components/ServicesMobile";
import { TrustBy } from "@/components/TrustBy";
import { WhyUs } from "@/components/WhyUs";
import { WorkFlow } from "@/components/WorkFlow";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyUs />
      <WorkFlow />
      <Services />
      <ServicesMobile />
      <ClientRating />
      <TrustBy />
      <ContractorList />
      <CTA />
    </>
  );
}
