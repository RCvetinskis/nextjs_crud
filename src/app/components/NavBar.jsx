import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";
export default function NavBar() {
  return (
    <ul className="bg-slate-600 text-white p-3 flex justify-between items-center">
      <Link href={"/"}>
        <IoHomeOutline size={24} />
      </Link>
      <Link href={"/addTopic"}>
        <IoIosAdd size={24} />
      </Link>
    </ul>
  );
}
