import axios from "axios";

const getNotes = async (user) => {
  const response = await axios.get(`http://localhost:3001/user/${user.id}`);
  const { data } = response;
  return data;
};

export default getNotes;
