type Props = {
  email: string;
};

export default function EmailButton({ email }: Props) {
  return (
    <div className="flex justify-center mt-6">
      <a
        href={`mailto:${email}`}
        className="border border-red-500 text-red-500 px-10 py-3 hover:bg-red-500 hover:text-white transition"
      >
        {email}
      </a>
    </div>
  );
}