"use client";

import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TwoColumnField from "../molecules/TwoColumnField";
import RecaptchaBox from "../atoms/RecaptchaBox";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      
      {/* Heading */}
      <h2 className="text-4xl text-gray-700 mb-10 text-center">
        We would love to hear from you
      </h2>

      <div className="w-[400px]  mx-auto">
        
        {/* Name */}
        <TwoColumnField />

        {/* Email */}
        <div className="mt-8">
          <Input placeholder="Email" />
        </div>

        {/* Phone */}
        <div className="mt-8 flex items-center border-b border-gray-400 py-2">
          <span className="mr-3">🇺🇸 +1</span>
          <input
            placeholder="Phone"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Company */}
        <div className="mt-8">
          <Input placeholder="Company" />
        </div>

        {/* Message */}
        <div className="mt-8">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 resize-none"
          />
        </div>

        {/* Counter */}
        <div className="text-right text-sm mt-2">
          Character Left:{" "}
          <span className="text-red-500">
            {1000 - message.length}
          </span>
        </div>

      <div className="flex flex-col items-center">
         {/* Fake reCAPTCHA */}
       
            <RecaptchaBox />

        <Button className="border border-red-500 text-red-500 py-4 mt-6 px-4 hover:bg-red-500 hover:text-white transition">
        Talk to our Solutions Expert!
      </Button>

       </div>
      </div>
    </div>
  );
}