import { ChangeEventHandler, FC } from "react";

type Iprops = {
  placeholder: string;
  type: "text";
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<Iprops> = (props) => {
  const { type, placeholder, onChange, value } = props;
  return (
    <input
      className="shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

export { Input };
