import Button from "../base/Button";
import Input from "../base/Input";

const Form = () => {
  return (
    <div className="mt-10 mb-8 flex flex-col md:flex-row gap-5">
        <Input />
        <Button />
    </div>
  )
}

export default Form