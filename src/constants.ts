import * as Yup from "yup";

export const postsURL: string = "http://localhost:8000/posts/";
export const usersURL: string = "http://localhost:8000/users/";

export const validationSchema = Yup.object({
  post: Yup.string().min(6).max(200),
});
