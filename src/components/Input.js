const Input = ({
  id,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  ariaInvalid,
  ariaDescribedby,
  ...rest
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none transition-all duration-200 tracking-wide ease-in-out"
        {...rest}
      />
    </div>
  );
};

export default Input;
