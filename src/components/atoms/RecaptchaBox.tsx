"use client";

import { useState } from "react";

export default function RecaptchaBox() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-8">
      <div className="w-[320px] h-[78px] bg-white border rounded-md shadow-sm flex items-center justify-between px-4">
        
        {/* Left Side */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setChecked(!checked)}
        >
          {/* Checkbox */}
          <div className="w-6 h-6 border-2 border-gray-500 flex items-center justify-center">
            
            {checked && (
              <span className="text-green-600 font-bold">✔</span>
            )}

          </div>

          <span className="text-gray-700 text-sm">
            I'm not a robot
          </span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center text-[10px] text-gray-500">
          
          <div className="w-8 h-8 mb-1">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="recaptcha"
              className="w-full h-full object-contain"
            />
          </div>

          <span>reCAPTCHA</span>
          <span className="text-[9px]">Privacy - Terms</span>
        </div>

      </div>
    </div>
  );
}