"use client";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import RemoveButton from "./RemoveButton";
import { useState, useEffect } from "react";
import axios from "axios";
export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/topics");
        if (data.error) {
          throw new Error("coudnt get topics");
        } else {
          setTopics(data.topics);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTopics();
  }, []);

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-300  flex justify-between items-center"
        >
          <div>
            <h2 className="text-2xl">{topic.title}</h2>
            <p className="description">{topic.description}</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/editTopic/${topic._id}`}>
              <FaPencilAlt size={23} />
            </Link>

            <RemoveButton id={topic._id} setTopics={setTopics} />
          </div>
        </div>
      ))}
    </>
  );
}
