"use client";

import { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { CountryType } from "../../types/county_type";
type selectVariant = {
  variant: string;
};
const SelectBox = ({ variant }: selectVariant) => {
  const customStyles: StylesConfig<CountryType, false> = {
    control: (provided) => ({
      ...provided,
      minHeight: "48px", // h-12
      borderRadius: "8px", // rounded-lg
      boxShadow: "none",
      cursor: "pointer",
      borderColor: "#D1D5DB",
      "&:hover": {
        borderColor: "#FB923C", // orange-400
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9CA3AF", // text-gray-400
    }),
  };

  const [options, setOptions] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("http://localhost:3000/api/country");
      const data: CountryType[] = await res.json();
      setOptions(data);
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

  return (
    <Select<CountryType, false>
      isLoading={isLoading}
      options={options}
      getOptionLabel={(option) => option.name}
      getOptionValue={(option) => option.code}
      placeholder="Select a country..."
      className={`w-full h-12 ${variant}`}
      classNamePrefix="select"
      styles={customStyles}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,

        colors: {
          ...theme.colors,
          primary25: "#FB923C ",
          primary: "#FED7AA",
        },
      })}
    />
  );
};

export default SelectBox;
