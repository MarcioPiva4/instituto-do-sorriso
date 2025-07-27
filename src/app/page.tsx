import Assessment from "@/components/Assessment";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import SectionExperts from "@/components/SectionExperts";
import SectionResults from "@/components/SectionResults";
import SectionTextImages from "@/components/SectionTextImages";
import SectionVideo from "@/components/SectionVideo";
import SectionSchedule from "@/components/SectionSchedule";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <SectionVideo></SectionVideo>
        <SectionSchedule></SectionSchedule>
        <SectionResults></SectionResults>
        <SectionTextImages></SectionTextImages>
        <Assessment></Assessment>
        <SectionExperts></SectionExperts>
        <Form></Form>
        <Faq></Faq>
      </main>
      <Footer></Footer>
    </>
  );
}
