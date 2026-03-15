import images from "../../assets/images/assets"
import Scroll from "../base/Scroll"

const Hero = () => {
  return (
    <div className="relative py-8" >
        <div className="md:hidden -mx-8">
            <img src={images.illustrationHeroMobilePng} alt="Hero Illustration" className="w-full"/>
        </div>

        <img src={images.illustrationHeroLeftSvg} alt="Hero Left Illustration" className="hidden md:block absolute -left-50 lg:left-0 bottom-0 w-2xs opacity-70"/>

        <img src={images.illustrationHeroRightSvg} alt="Hero Right Illustration" className="hidden md:block absolute -right-50 lg:right-0 bottom-0 w-2xs opacity-70"/>
        
        <div className="mt-16 md:mt-0 max-w-sm md:max-w-xl mx-auto hero-illustration">
            <div className="text-center md:max-w-lg mx-auto">
                <h1 className="text-preset-1 text-primary-neutral-000">Get paid for the work you <span className="text-secondary-cyan-400">love</span> to do.</h1>
                <p className="text-preset-5 mt-6">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you're looking to escape the rat race or set up a side hustle, we've got you covered.</p>
            </div>

            <Scroll />
        </div>

    </div>
  )
}

export default Hero