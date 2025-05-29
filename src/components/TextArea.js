const Textarea = ({
  id,
  name,
  placeholder,
  rows,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        {...rest} // for aria-invalid, aria-describedby, etc.
        className="text-white placeholder:text-opacity-90 focus-visible:border-opacity-100 border-white border-opacity-40 border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none transition-all duration-200 tracking-wide ease-in-out"
      />
    </div>
  );
};

export default Textarea;
