"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/topics/${id}`,
        {
          title: newTitle,
          description: newDescription,
        }
      );
      if (data.error) {
        throw new Error(data.message);
      } else {
        setNewDescription(data.topic.description);
        setNewTitle(data.topic.title);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5 p-2">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-600 p-2"
        type="text"
        placeholder="title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-600 p-2"
        type="text"
        placeholder="description"
      />
      <button
        className="bg-slate-700 text-white p-3 rounded w-fit"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default EditTopicForm;
