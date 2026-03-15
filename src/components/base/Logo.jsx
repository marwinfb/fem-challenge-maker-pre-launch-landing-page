import images from "../../assets/images/assets"

const Logo = () => {
  return (
    <div className="text-center md:text-left my-8">
      <a href='#' className="inline-block">
        <img src={images.logoSvg} alt="Logo" className="" width={140} height="auto"/>
      </a>
    </div>
  )
}

export default Logo