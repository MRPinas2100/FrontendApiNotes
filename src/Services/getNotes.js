import axios from "axios";

const getNotes = async (id) => {
  const response = await axios.get(`http://localhost:3001/user/${id}`);
  const { data } = response;
  return data;
};

export default { getNotes };
