// organisms/OurClients.tsx
import ClientLogo from "../molecules/ClientLogo";

export default function AboutOurClients() {
  return (
    <div className="relative py-24 px-6">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/image/change-img-2.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
        {/* LIGHT overlay (important) */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto">
        
        <h2 className="text-4xl font-semibold">Our Clients</h2>
        <p className="mt-2 text-lg text-gray-200">
          Names who trust us
        </p>

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          
          <ClientLogo src="/image/clients/aromaofwine.jpg" />
          <ClientLogo src="/image/clients/brainshut.jpg" />
          <ClientLogo src="/image/clients/cheerio.jpg" />
          <ClientLogo src="/image/clients/dawerlee.jpg" />
          <ClientLogo src="/image/clients/feelerez.jpg" />
          <ClientLogo src="/image/clients/hottywood.jpg" />

          <ClientLogo src="/image/clients/listoz.jpg" />
          <ClientLogo src="/image/clients/lollybee.jpg" />
          <ClientLogo src="/image/clients/rated me.jpg" />
          <ClientLogo src="/image/clients/reverting.jpg" />
          <ClientLogo src="/image/clients/shortfeed.jpg" />
          <ClientLogo src="/image/clients/solartheworld.jpg" />

          <ClientLogo src="/image/clients/travools.jpg" />
          <ClientLogo src="/image/clients/tynelz.jpg" />
          <ClientLogo src="/image/clients/vegtable.jpg" />

        </div>
      </div>
    </div>
  );
}