"use client";

import { useState } from "react";
import axios from "axios";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TwoColumnField from "../molecules/TwoColumnField";
import RecaptchaBox from "../atoms/RecaptchaBox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ correct change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://localhost:5000/api/contact",
        formData
      );

      alert("Form submitted successfully ✅");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-4xl text-gray-700 mb-10 text-center">
        We would love to hear from you
      </h2>

      <form onSubmit={handleSubmit} className="w-[400px] mx-auto">

        {/* ✅ FIXED HERE */}
        <TwoColumnField
          onChange={handleChange}
          values={formData}
        />

        <div className="mt-8">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8 flex items-center border-b border-gray-400 py-2">
          <span className="mr-3">🇺🇸 +1</span>
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        <div className="mt-8">
          <Input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            maxLength={1000}
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 resize-none"
          />
        </div>

        <div className="text-right text-sm mt-2">
          Character Left:
          <span className="text-red-500 ml-1">
            {1000 - formData.message.length}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <RecaptchaBox />

          <Button
            type="submit"
            className="border border-red-500 text-red-500 py-4 mt-6 px-4 hover:bg-red-500 hover:text-white transition"
          >
            {loading ? "Submitting..." : "Talk to our Solutions Expert!"}
          </Button>
        </div>

      </form>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import Input from "../atoms/Input";
// import Button from "../atoms/Button";
// import TwoColumnField from "../molecules/TwoColumnField";
// import RecaptchaBox from "../atoms/RecaptchaBox";
// import axios from "axios";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // 🔹 Handle Change (FIXED SAFE VERSION)
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // 🔹 Submit (NO API)
//   const handleSubmit = () => {
//     setLoading(true);

//     console.log("Form Data:", formData);

//     alert("Form submitted successfully ✅");

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       company: "",
//       message: "",
//     });

//     setLoading(false);
//   };

//   return (
//     <div className="bg-gray-100 py-16 px-6 md:px-20">
//       <h2 className="text-4xl text-gray-700 mb-10 text-center">
//         We would love to hear from you
//       </h2>

//       <div className="w-[400px] mx-auto">
        
//         {/* Name */}
//         <TwoColumnField
//           onChange={handleChange}
//           values={formData}
//         />

//         {/* ✅ Email (FIXED) */}
//         <div className="mt-8">
//           <Input
//             name="email"
//             type="email"   // 🔥 important fix
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Phone */}
//         <div className="mt-8 flex items-center border-b border-gray-400 py-2">
//           <span className="mr-3">🇺🇸 +1</span>
//           <input
//             name="phone"
//             placeholder="Phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full bg-transparent focus:outline-none"
//           />
//         </div>

//         {/* Company */}
//         <div className="mt-8">
//           <Input
//             name="company"
//             placeholder="Company"
//             value={formData.company}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Message */}
//         <div className="mt-8">
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             maxLength={1000}
//             className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 resize-none"
//           />
//         </div>

//         {/* Counter */}
//         <div className="text-right text-sm mt-2">
//           Character Left:{" "}
//           <span className="text-red-500">
//             {1000 - formData.message.length}
//           </span>
//         </div>

//         <div className="flex flex-col items-center">
//           <RecaptchaBox />

//           <Button
//             onClick={handleSubmit}
//             className="border border-red-500 text-red-500 py-4 mt-6 px-4 hover:bg-red-500 hover:text-white transition"
//           >
//             {loading ? "Submitting..." : "Talk to our Solutions Expert!"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }