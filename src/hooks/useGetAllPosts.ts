import { useEffect, useState } from "react";
import Post from "../types/post";
import axios from "axios";
import { postsURL } from "../constants";

const useGetAllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getAllData = async () => {
    try {
      const { data } = await axios.get(postsURL);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  console.log(posts);

  useEffect(() => {
    getAllData();
  }, []);

  return { posts, setPosts, getAllData };
};

export default useGetAllPosts;
