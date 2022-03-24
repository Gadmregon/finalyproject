import axios from "axios";

const url = "http://localhost:3500/posts";

export const fetchPost = () => axios.get(url);
