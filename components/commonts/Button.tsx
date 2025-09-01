type ButtonProps = {
  type: "button" | "submit";
  title: string;

  variant: "bg-orange-400" | string;
  full?: boolean;
};
const Button = ({ type, title, variant, full }: ButtonProps) => {
  return (
    <button
      className={` bg-orange-400 text-white py-2 px-4 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
