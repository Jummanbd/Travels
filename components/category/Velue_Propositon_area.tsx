import { VALUE_AREA } from "@/constants/main_bd";
export default function Value_Propositon() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-white/75 shadow-lg rounded-md p-10">
        {VALUE_AREA.map((link) => (
          <div className="flex justify-between items-center " key={link.title}>
            <div className="text-4xl me-3 text-orange-500">{link.icon}</div>
            <div className="text-lg  capitalize">{link.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
