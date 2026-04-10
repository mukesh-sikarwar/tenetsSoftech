type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ children, type = "button", className }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}




// type ButtonProps = {
//   children: React.ReactNode;
//   className?: string;
// };

// export default function Button({ children, className }: ButtonProps) {
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }