// Axios
import axios from "axios";

// React
import { useEffect, useRef, useState } from "react";

// types
import Post from "../types/post";
import User from "../types/user";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useFormik } from "formik";
import { postsURL, usersURL, validationSchema } from "../constants";

// Images
import PillButton from "../components/PillButton";
import PostComp from "../components/PostComp";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editPost, setEditPost] = useState<{ isEditing: boolean; id: number }>({
    isEditing: false,
    id: 0,
  });
  const [users, setUsers] = useState<User[]>([]);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const getAllData = async () => {
    try {
      const { data } = await axios.get(postsURL);
      setPosts([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(usersURL);
      setUsers([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostIndex = (id: number) => {
    return posts.findIndex((element) => element.id === id);
  };

  const handleNewPost = async (value: { post: string; userId: number }) => {
    try {
      const { data } = await axios.post(postsURL, value);
      setPosts((prevPosts) => [...prevPosts, data]);

      // Fetch all updated data before clearing input
      await getAllData();

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error creating a new post:", error);
    }
  };

  // Function to enter edit mode and set Formik's post value
  const handleEditMode = (id: number) => {
    const postIndex = getPostIndex(id);
    if (postIndex !== -1) {
      setEditPost({ isEditing: true, id });
      formik.setFieldValue("post", posts[postIndex].post); // Set Formik's post value
      window.scrollTo(0, 0);
    }
  };

  const cancelEdit = () => {
    setEditPost({ isEditing: false, id: 0 });

    // Resetting the Formik field value instead of using inputRef
    formik.setFieldValue("post", "");
  };

  // Update function for editing a post
  const handleEditPost = async (
    value: { post: string; userId: number },
    id?: number
  ) => {
    try {
      await axios.patch(postsURL + id, value);

      // Wait for data to refresh before resetting post state
      await getAllData();

      // Clear the form value and exit edit mode
      formik.setFieldValue("post", "");
      setEditPost({ isEditing: false, id: 0 });
    } catch (error) {
      console.error("Error updating the post:", error);
    }
  };

  const handleDelete = async (id: number = 0) => {
    try {
      const response = await axios.delete(postsURL + id);
      console.log(response);
      getAllData();
      notifyDelete();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to delete post
  const notifyDelete = () =>
    toast.error("Post deleted", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "dark",
    });

  const formik = useFormik({
    initialValues: {
      post: "",
      userId: 1,
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      if (editPost.isEditing) {
        handleEditPost(value, editPost.id);
      } else {
        handleNewPost(value);
      }

      setEditPost({ isEditing: false, id: 0 });
    },
  });

  useEffect(() => {
    getAllData();
    getAllUsers();
  }, []);

  return (
    <>
      <div className="col-span-2 border-e-2 border-[#2f3336] min-h-screen h-full">
        <ToastContainer />
        <div>
          {/* Input */}
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div className="relative w-full min-w-[200px]">
                <textarea
                  onChange={formik.handleChange}
                  className="peer min-h-48 w-full resize-none bg-transparent py-5 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 text-xl px-8 overflow-y-visible"
                  placeholder="Whats happening?"
                  name="post"
                  ref={inputRef}
                  value={formik.values.post}></textarea>
              </div>
              <div className="border border-[#2f3336] border-x-0 border-t-0 px-8 py-5 text-end">
                <div className="flex justify-end gap-5 items-center">
                  {formik.errors.post && (
                    <p className="text-red-600">{formik.errors.post}</p>
                  )}
                  <p>
                    {editPost.isEditing
                      ? inputRef.current?.defaultValue.length
                      : inputRef.current?.value.length}
                    / 200
                  </p>
                  {editPost.isEditing ? (
                    <button
                      onClick={cancelEdit}
                      className="underline underline-offset-4 text-red-600 hover:text-red-500">
                      Cancel
                    </button>
                  ) : null}
                  <PillButton title="Post" />
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col-reverse">
            {posts.map((post) => (
              <PostComp
                post={post}
                users={users}
                handleDelete={handleDelete}
                handleEditMode={handleEditMode}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
