import Hero from "@/components/Hero";
import BookingEngine from "@/components/BookingEngine";
import DespreNoi from "@/components/DespreNoi";
import ImageSlider from "@/components/ImageSlider";
import CTA from "@/components/CTA";
import Facilities from "@/components/Facilities";
import RoomsPreview from "@/components/RoomsPreview";
import Reviews from "@/components/Reviews";
import ReviewsSlider from "@/components/ReviewsSlider";
import { reviews, dreamReviews } from "@/lib/data";
import DespreDreamStudio from "@/components/DespreDreamStudio";
import DreamStudioSlider from "@/components/DreamStudioSlider";
import DreamRoomsPreview from "@/components/DreamRoomsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative z-20 -mt-16 px-6">
        <div className="w-full">
          <BookingEngine />
        </div>
      </section>

      {/* ============ HAPPY PLACE ============ */}
      <DespreNoi />
      <ImageSlider />
      <RoomsPreview />
      <ReviewsSlider title="Happy Place" reviews={reviews} />

      {/* ============ DREAM STUDIO ============ */}
      <DespreDreamStudio />
      <DreamStudioSlider />
      <DreamRoomsPreview />
      <ReviewsSlider title="Dream Studio" reviews={dreamReviews} />

      {/* ============ COMUN ============ */}
      <Facilities />
      <CTA />
    </>
  );
}
