"use client";

import React from "react";

type InputProps = {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export default function Input({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      name={name}                 // ✅ important
      placeholder={placeholder}
      value={value}               // ✅ controlled input
      onChange={onChange}         // 🔥 MOST IMPORTANT FIX
      className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
    />
  );
}