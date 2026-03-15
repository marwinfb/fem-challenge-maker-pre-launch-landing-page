

const Input = () => {
  return (
    <input
      id="email"
      type="email"
      name="email"
      autoComplete="email"
      placeholder="Email address"
      className="md:grow text-preset-6 block rounded-full px-5 py-3 outline-1 outline-secondary-blue-800 hover:outline-1 hover:outline-secondary-cyan-400 text-primary-neutral-000 hover:placeholder:text-primary-neutral-000 focus:outline-2 focus:outline-offset-3 focus:outline-secondary-red-4000 bg-secondary-blue-800 transition-all ease-in"
    />
  );
};

export default Input;
