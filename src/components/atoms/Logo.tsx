import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      
      <div style={{ width: "50px" }}>
        <Image
          src="/logo.jpg"
          alt="Tenets Softech Logo"
          width={50}
          height={50}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text text-transparent hover:scale-105 transition duration-300">
        Tenets Softech
      </h1>

    </div>
  );
}