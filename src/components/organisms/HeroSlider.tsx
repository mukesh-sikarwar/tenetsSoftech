import Carousel from "../molecules/Carousel";

export default function HeroSlider() {
  const slides = [
    { src: "/image/odoo.jpeg", alt: "ODOO" },
    { src: "/image/pronto.jpeg", alt: "PRONTO" },
    { src: "/image/digimonk-cmmi-certified-company.jpeg", alt: "CMMI"},
    { src: "/image/AWS.jpg", alt: "AWS" },
    { src: "/image/bank-of-india.jpg", alt: "BOI" },
    { src: "/image/banner-1.jpg", alt: "cloud computing" },
    { src: "/image/banner-3.jpg", alt: "ALEXA" },
    { src: "/image/banner-4.jpg", alt: "CUSTOM APPLICATION" },
  ];

  return (
    <section className="py-10">
      <Carousel slides={slides} />
    </section>
  );
}