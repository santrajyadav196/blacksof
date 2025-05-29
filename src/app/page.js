import ContactPage from "@/components/ContactPage";
import DrivenPerformance from "@/components/DrivenPerformance";
import SolutionPage from "@/components/SolutionPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <DrivenPerformance />
      <SolutionPage />
      <ContactPage />
    </>
  );
}
