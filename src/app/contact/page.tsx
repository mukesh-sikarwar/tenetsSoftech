import ContactHero from "@/components/organisms/ContactHero";
import ContactForm from "@/components/organisms/ContactForm";
import MainLayout from "@/components/templates/MainLayout";
import OurOffices from "@/components/organisms/OurOffices";
import WriteToUs from "@/components/organisms/WriteToUs";
import LatestNewsletter from "@/components/organisms/LatestNewsletter";

export default function Contact() {
  return (
    <MainLayout>
     <ContactHero />
     <ContactForm />
     <OurOffices />
     <WriteToUs />
     <LatestNewsletter />
    </MainLayout>
  );
}