import React from "react";

const FeatureItem = ({ feature }) => {
  return (
    <li key={feature.id} className="flex-1 text-center flex flex-col sm:flex-row lg:flex-col sm:gap-12 items-center lg:items-start md:odd:px-12 lg:odd:px-0 lg:even:pt-12">
      <div className="size-30 px-7.5 py-6.25 rounded-4xl inline-flex items-center justify-center bg-secondary-blue-800">
        <img src={feature.images} alt={feature.title} width={feature.imgWidth} height="auto" />
      </div>
      <div className="mt-8 max-w-sm sm:mt-0 sm:text-left">
        <h3 className="text-preset-4 text-primary-neutral-000">{feature.title}</h3>
        <p className="mt-3">{feature.description}</p>
      </div>
    </li>
  );
};

export default FeatureItem;
