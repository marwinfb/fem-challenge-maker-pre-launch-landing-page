import images from "../../assets/images/assets"
import Form from "../base/Form";


const Contact = () => {
  return (
    <div className="w-full footer-illustration">
      <div className="max-w-md mx-auto text-center md:py-12.5">
        <h3 className="text-preset-3 text-center text-primary-neutral-000">
          Get notified when we launch
        </h3>

        <Form />
      </div>
    </div>
  );
};

export default Contact;
