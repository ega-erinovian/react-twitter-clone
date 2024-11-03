import { FC } from "react";
import Post from "../types/post";

// react-icons
import { FaRegComment } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPencil, GoTrash } from "react-icons/go";
import { AiOutlineRetweet } from "react-icons/ai";
import User from "../types/user";

interface PostProps {
  post: Post;
  users: User[];
  handleDelete: (id?: number) => {};
  handleEditMode: (id: number) => void;
}

const PostComp: FC<PostProps> = ({
  post,
  users,
  handleDelete,
  handleEditMode,
}) => {
  const tweetActions = [
    {
      icon: <FaRegComment />,
      count: 800,
    },
    {
      icon: <IoIosHeartEmpty />,
      count: 3050,
    },
    {
      icon: <AiOutlineRetweet />,
      count: 200,
    },
  ];

  return (
    <div
      className="w-full border border-[#2f3336] border-x-0 border-t-0"
      key={post.id}>
      <div className="container mx-auto flex gap-5 p-8">
        <img
          src={
            users.find((user) => user.id === post.userId)?.imgURL ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="Profile Picture"
          className="object-cover rounded-full w-12 h-12"
        />
        {/* Username */}
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-semibold">
              {users.find((user) => user.id === post.userId)?.name}
            </p>
            <p className="text-gray-500">
              @{users.find((user) => user.id === post.userId)?.username}
            </p>
          </div>
          <p>{post.post}</p>
          <ul className="w-80 flex justify-between items-center mt-5 text-lg text-gray-600">
            {tweetActions.map((action, idx) => (
              <li
                className="flex items-center gap-2 hover:text-white hover:cursor-pointer transition-all"
                key={idx}>
                {action.icon} <span className="text-sm">{action.count}</span>
              </li>
            ))}
            <li
              className="flex items-center gap-2 hover:text-white hover:cursor-pointer transition-all"
              onClick={() => (post.id ? handleEditMode(post.id) : null)}>
              <GoPencil />
            </li>
            <button
              className="flex items-center gap-2 hover:text-white hover:cursor-pointer transition-all"
              onClick={() => handleDelete(post.id)}>
              <GoTrash />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostComp;
