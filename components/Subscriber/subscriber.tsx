import Button from "../commonts/Button";
import SectionTitle from "../commonts/sectionTitel";
export default function Subscript() {
  return (
    <div
      className=" relative py-16 bg-hero-bg bg-cover  bg-no-repeat  bg-center w-full flex items-center px-12 rounded-lg "
      style={{ backgroundImage: "url('/images/subscrip_img.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-600/80 rounded-lg"></div>
      <div className="subsctipt-header text-white pb-1 z-10 flex-1 pe-36">
        <SectionTitle
          title="40,000+ SATISFIED CUSTOMERS"
          className="text-white z-10 pb-2 text-4xl"
        />
        <p className="dect">
          Need help in planning a private tour to India? Maybe you need help
          with planning your family holiday, honeymoon, sightseeing tour,
          private day tours or a full Indian holiday itinerary? Whatever you
          need, we can help!
        </p>
      </div>
      <Button
        title="Booking  Now"
        type="button"
        variant="text-black  z-10 flex-0 rounded-lg px-4 py-4 "
      />
    </div>
  );
}
