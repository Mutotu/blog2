import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostFrom from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostFrom
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
