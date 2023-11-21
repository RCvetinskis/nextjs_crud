"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddTopicPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("provide title or description");
    }
    try {
      const { data } = await axios.post("http://localhost:3000/api/topics", {
        title,
        description,
      });
      if (data.error) {
        throw new Error("failed to post new topic");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5 p-2">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-600 p-2"
        type="text"
        placeholder="title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
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

export default AddTopicPage;
