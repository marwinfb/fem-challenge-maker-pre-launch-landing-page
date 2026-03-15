import images from "../../assets/images/assets"
import Button from "../base/Button";
import Input from "../base/Input";

const Contact = () => {
  return (
    <div className="w-full footer-illustration">
      <div className="max-w-md mx-auto text-center md:py-12.5">
        <h3 className="text-preset-3 text-center text-primary-neutral-000">
          Get notified when we launch
        </h3>

        <form className="mt-10 mb-8 flex flex-col md:flex-row gap-5">
          <Input />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Contact;
