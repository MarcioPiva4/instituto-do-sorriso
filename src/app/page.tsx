import Assessment from "@/components/Assessment";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <Assessment></Assessment>
        <Faq></Faq>
      </main>
      <Footer></Footer>
    </>
  );
}
