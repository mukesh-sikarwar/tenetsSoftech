type Props = {
  open: boolean;
  toggle: () => void;
};

export default function MenuToggle({ open, toggle }: Props) {
  return (
    <button onClick={toggle} className="text-2xl">
      {open ? "✕" : "☰"}
    </button>
  );
}