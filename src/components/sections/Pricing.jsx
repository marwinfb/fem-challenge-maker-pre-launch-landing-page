import PricingCards from "../base/PricingCards";

const Pricing = () => {
  return (
    <section className="my-20 lg:my-30">
      <div className="text-center space-y-6 max-w-sm md:max-w-xl mx-auto">
        <h2 className="text-preset-1 text-primary-neutral-000">
          Our pricing plans
        </h2>
        <p>
          We only make money when our creators make money. Our plans are always
          affordable, and it's completely free to get started.
        </p>
      </div>

      <div className="max-w-md lg:max-w-3xl mx-auto">
        <PricingCards />
      </div>
    </section>
  );
};

export default Pricing;
