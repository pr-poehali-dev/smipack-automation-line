import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import WildberriesSolutions from "@/components/WildberriesSolutions";
import SupportServices from "@/components/SupportServices";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCatalog />
      <WildberriesSolutions />
      <SupportServices />
      <ContactForm />
    </div>
  );
};

export default Index;
