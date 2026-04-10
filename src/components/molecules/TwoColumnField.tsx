import Input from "../atoms/Input";

type Props = {
  values: {
    firstName: string;
    lastName: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TwoColumnField({ values, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Input
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={onChange}
      />

      <Input
        name="lastName"
        placeholder="Last Name"
        value={values.lastName}
        onChange={onChange}
      />
    </div>
  );
}




// import Input from "../atoms/Input";

// export default function TwoColumnField() {
//   return (
//     <div className="grid grid-cols-2 gap-10">
//       <Input placeholder="First Name" />
//       <Input placeholder="Last Name" />
//     </div>
//   );
// }