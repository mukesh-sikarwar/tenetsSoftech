type Props = {
  city: string;
  address: string;
  phone: string;
};

export default function OfficeCard({ city, address, phone }: Props) {
  return (
    <div className="bg-[#f5f6f8] rounded-xl shadow-md px-8 py-10 text-center hover:shadow-lg transition">
      
      <h3 className="text-xl font-medium text-gray-700 mb-4">
        {city}
      </h3>

      <p className="text-gray-600 text-sm leading-6 mb-3">
        {address}
      </p>

      <p className="text-gray-600 text-sm">
        Tel:{" "}
        <span className="text-blue-600 font-medium">
          {phone}
        </span>
      </p>

    </div>
  );
}