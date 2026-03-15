import images from "../../assets/images/assets";
import FeatureItem from "../base/FeatureItem";

const features = [
  {
    id: 1,
    title: "Indulge your passions",
    description:
      "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
    images: images.illustrationPassionsSvg,
    imgWidth: 70,
  },
  {
    id: 2,
    title: "Gain financial freedom",
    description:
      "Start making money work for you. There's nothing quite like earning while you sleep. ",
    images: images.illustrationFinancialFreedomSvg,
    imgWidth: 65,
  },
  {
    id: 3,
    title: "Choose your lifestyle",
    description:
      "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
    images: images.illustrationLifestyleSvg,
    imgWidth: 60,
  },
  {
    id: 4,
    title: "Work from anywhere",
    description:
      "Selling online means not being pinned down. Want to work AND travel? Go for it!",
    images: images.illustrationWorkAnywhereSvg,
    imgWidth: 60,
  },
];

const Feature = () => {
  return (
    <section className="my-20 lg:my-30 md:max-w-3xl lg:max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {features.map((feature) => (              
          <FeatureItem key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
