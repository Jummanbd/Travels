"use client";
import { useState } from "react";
import Datepicker, {
  DateValueType,
  PopoverDirectionType,
} from "react-tailwindcss-datepicker";
type variant = {
  variant: string;
};
const DateSelect = ({ variant }: variant) => {
  // value type comes from library
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      popoverDirection={"on" as PopoverDirectionType} //  type
      value={value}
      onChange={handleChange}
      primaryColor={"orange"}
      inputClassName={`w-full h-12 bg-white text-black  px-3 py-4 border border-gray-300 rounded-lg focus:border-orange-400  outline-none 
         placeholder-gray-400 placeholder-sm hover:border-orange-400 font-normal text-base ${variant}  cursor-pointer`}
    />
  );
};

export default DateSelect;
