import images from "../../assets/images/assets"

const Scroll = () => {
  return (
    <div className="mt-8 lg:mt-16 animate-bounce">
      <img src={images.iconScrollSvg} alt="Scroll Icon" className="mx-auto" width={26} height={42}/>
    </div>
  );
};

export default Scroll;
