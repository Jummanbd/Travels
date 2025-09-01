type Props = {
  title: string;
  className: string;
};

export default function SectionTitle({ title, className }: Props) {
  return (
    <h2
      className={`pb-9 text-5xl font-semibold text-black max-md:text-center  ${className}`}
    >
      {title}
    </h2>
  );
}
