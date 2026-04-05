import Input from "../atoms/Input";

export default function TwoColumnField() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
    </div>
  );
}