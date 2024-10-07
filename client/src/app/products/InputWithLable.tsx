import React, { ChangeEvent, ChangeEventHandler, FormEvent } from "react";

type Props = {
  label: string;
  htmlForValue: string;
  valueformData: string;
  handleChange: (e: ChangeEventHandler<HTMLFormElement>) => void;
};

const InputWithLable = ({
  label,
  htmlForValue,
  handleChange,
  valueformData,
}: Props) => {
  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <>
      <label htmlFor={htmlForValue} className={labelCssStyles}>
        {label}
      </label>
      {/* <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={valueformData}
        className={inputCssStyles}
        required
      /> */}
    </>
  );
};

export default InputWithLable;
