import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Amore Fruit Pops",
  description: "Get in touch with Amore Fruit Pops for orders, events, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}
