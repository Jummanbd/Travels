import CardItems from "@/components/card/cards";
import Value_Propositon from "@/components/category/Velue_Propositon_area";
import Button from "@/components/commonts/Button";
import SectionTitle from "@/components/commonts/sectionTitel";
import { Footer } from "@/components/footer/footer";
import CardSider from "@/components/slider/Card_slider";
import HeroSlider from "@/components/slider/Hero_slider";
import Subscript from "@/components/Subscriber/subscriber";
import Testimonial from "@/components/testimonial/Testimonial";
import { getApi } from "@/lib/getapi";
import { CategoryType } from "@/types/category_type";
import { Review } from "@/types/review_type";

export default async function Home() {
  const categories: CategoryType[] = await getApi("category");
  const reviews: Review[] = await getApi("reviews");

  return (
    <main>
      <HeroSlider />
      <Value_Propositon />
      <section className="container mx-auto pt-20">
        <SectionTitle
          title="Get inspired for your next trip"
          className="text-center capitalize  mb-7"
        />
        <CardItems categories={categories} reviews={reviews} />
        <Button
          title="More"
          type="button"
          variant=" flex  text-center bg-none border border-1 rounded-lg mt-6 mx-auto px-5 py-3 bg-gray-300"
        />
      </section>

      <section className="container mx-auto pt-20 ">
        <SectionTitle
          title="Popular Hotel Destinations"
          className="text-center capitalize mb-7"
        />
        <CardSider categories={categories} reviews={reviews} />
      </section>

      <section className="container mx-auto pt-20">
        <Subscript />
      </section>

      <Testimonial reviews={reviews} />
      <Footer />
    </main>
  );
}
