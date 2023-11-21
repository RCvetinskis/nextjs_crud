import mongoose, { Schema } from "mongoose";

const topicSchemaNextJs = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Topic =
  mongoose.models.TopicNextJs ||
  mongoose.model("TopicNextJs", topicSchemaNextJs);
export default Topic;
