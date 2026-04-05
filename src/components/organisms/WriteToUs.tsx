import MailIcon from "../atoms/MailIcon";
import Button from "../atoms/Button";

export default function WriteToUs() {
  return (
    <section className="bg-[#fff] py-20 text-center">
      
      {/* Icon */}
      <MailIcon />

      {/* Heading */}
      <h2 className="text-4xl text-gray-700 font-medium">
        Write to Us
      </h2>

       <Button className="border border-red-500 text-red-500 py-4 mt-6 px-4 hover:bg-red-500 hover:text-white transition">
      Tenetssooftech@.in
      </Button>


    </section>
  );
}