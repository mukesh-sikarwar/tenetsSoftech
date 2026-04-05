type Props = {
  name: string;
  country: string;
  img: string;
  active?: boolean;
};

export default function UserCard({ name, country, img, active }: Props) {
  return (
    <div className="flex items-center gap-3">
      
      {/* Avatar */}
      <img
        src={img}
        alt={name}
        className={`w-12 h-12 rounded-full object-cover ${
          active ? "opacity-100" : "opacity-40 grayscale"
        }`}
      />

      {/* Info */}
      <div>
        <p
          className={`text-sm ${
            active ? "text-red-500 font-medium" : "text-gray-500"
          }`}
        >
          {name}
        </p>
        <p className="text-xs text-gray-400">{country}</p>
      </div>

    </div>
  );
}