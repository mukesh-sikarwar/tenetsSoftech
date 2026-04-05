import OfficeCard from "../atoms/OfficeCard";

const offices = [
  {
    city: "Gwalior",
    address:
      "Software Technology Parks Of India, Gwalior, Madhya Pradesh,474005 India",
    phone: "+91 77228-45500",
  },
  {
    city: "Noida",
    address: "I 88 , Beta 2, Greater Noida,India",
    phone: "+91 77228-45500",
  },
  {
    city: "Bhopal",
    address: "Plot No R 22 Zone 1 MP Nagar, Bhopal",
    phone: "+91 77228-45500",
  },
  {
    city: "Australia",
    address: "9 / 2A Federal Rd, Seven HillsNSW - 2147,Australia",
    phone: "+61 423 515 482",
  },
  {
    city: "Canada",
    address: "115 aylesbury dr.brampton (ontario),Canada",
    phone: "+1 902 293 2011",
  },
];

export default function OfficeGrid() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-10">
      
      {offices.map((office, i) => (
        <div
          key={i}
          className={`${i >= 3 ? "md:col-span-1 md:mx-auto" : ""}`}
        >
          <OfficeCard {...office} />
        </div>
      ))}

    </div>
  );
}