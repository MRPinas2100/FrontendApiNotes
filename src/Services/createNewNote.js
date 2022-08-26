import axios from "axios";

const createNote = async (newNote = {}, userToken = "") => {
  const config = {
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  };
  const response = await axios.post(
    "http://localhost:3001/newNote/",
    newNote,
    config
  );
  const { data } = response;
  if (data) {
    return "Note was created";
  } else {
    return "Note was not created";
  }
};

export default createNote;
