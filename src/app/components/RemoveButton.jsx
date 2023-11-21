import { FaTrash } from "react-icons/fa";
import axios from "axios";
export default function RemoveButton({ id, setTopics }) {
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/topics?id=${id}`
      );
      if (!data.error) {
        setTopics(data.topics);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={handleDelete} className="text-red-500">
      <FaTrash size={24} />
    </button>
  );
}
