import images from "../../assets/images/assets";

const pricingPlans = [
  {
    id: 1,
    title: "Dip your toe",
    description: "Just getting started? No problem at all! Our free plan will take you a long way.",
    price: "Free",
    features: [
      "Unlimited products",
      "Basic analytics",
      "Limited marketplace exposure",
      "10% fee per transaction",
    ],
    icon: images.iconFreeSvg,
  },
  {
    id: 2,
    title: "Dive right in",
    description: "Ready for the big time? Our paid plan will help you take your business to the next level.",
    price: "$25.00",
    features: [
      "Custom domain",
      "Advanced analytics and reports",
      "High marketplace visibility",
      "15% fee per transaction",
    ],
    icon: images.iconPaidSvg,
  },
];

const PricingCards = () => {
  return (
    <div className="mt-20 grid lg:grid-cols-2 gap-20 lg:gap-8">
      {pricingPlans.map((plan) => (
        <div key={plan.id} className={`space-y-4 px-5 py-8 lg:py-12 rounded-lg 
        ${plan.id === 2 ? "bg-secondary-cyan-400 text-primary-neutral-900" : "bg-secondary-blue-800 text-primary-neutral-000"}`}>

          <img src={plan.icon} alt={`${plan.title} icon`} className="-mt-18" />

          <div className="space-y-4">
            <h4 className="text-preset-4">{plan.title}</h4>
            <p className={`text-preset-5 opacity-60 ${plan.id === 2 ? "text-primary-neutral-900" : "text-primary-neutral-000"}`}>{plan.description}</p>
          </div>

          <p className="text-preset-2 inline-flex items-center gap-2">{plan.price} {plan.id === 2 && <span className="text-preset-5 opacity-60">/month</span>}</p>

          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <img src={plan.id === 2 ? images.iconCheckPaidSvg : images.iconCheckFreeSvg} alt="Check icon" width={11.36} height={8.1} />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
