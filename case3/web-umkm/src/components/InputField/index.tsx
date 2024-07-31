import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  error,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-8 max-md:max-w-full">
      <label htmlFor={name} className="max-md:max-w-full">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shrink-0 mt-2.5 h-16 bg-white text-black px-4 py-2 rounded-lg border border-solid max-md:max-w-full"
        aria-label={label}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
