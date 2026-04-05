import UserCard from "../atoms/UserCard";

const users = [
  { name: "Joseph C", country: "USA", img: "https://i.pravatar.cc/100?1" },
  { name: "Rohan K.", country: "USA", img: "https://i.pravatar.cc/100?2" },
  { name: "Antonio T.", country: "USA", img: "https://i.pravatar.cc/100?3" },
  { name: "Rodolfo V.", country: "USA", img: "https://i.pravatar.cc/100?4" },
  { name: "Andras F.", country: "Hungary", img: "https://i.pravatar.cc/100?5" },
  { name: "Thomas R.", country: "USA", img: "https://i.pravatar.cc/100?6" },
  { name: "Hansel A.", country: "Australia", img: "https://i.pravatar.cc/100?7", active: true },
  { name: "Mohamed T.", country: "Germany", img: "https://i.pravatar.cc/100?8" },
  { name: "Hameed S.", country: "Canada", img: "https://i.pravatar.cc/100?9" },
  { name: "Jassim A.", country: "Kuwait", img: "https://i.pravatar.cc/100?10" },
];

export default function UsersGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
      {users.map((user, i) => (
        <UserCard key={i} {...user} />
      ))}
    </div>
  );
}