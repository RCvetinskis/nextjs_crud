import EditTopicForm from "./components/EditTopicForm";
import axios from "axios";
const getTopicById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (data.error) {
      throw new Error(data.message);
    } else {
      return { title: data.topic.title, description: data.topic.description };
    }
  } catch (error) {
    console.log(error);
  }
};

const EditTopicPage = async ({ params }) => {
  const { id } = params;
  const { title, description } = await getTopicById(id);

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default EditTopicPage;
