import axios from "axios";

// Get Worker Weekly data
export const getTaskList = async (
    page
  ) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_BASEURL}/task?limit=10&offset=${page}`,
      });  
      console.log(response);
    } catch (err) {
      console.log();
    } finally {
        console.log();
    }
  };


  // Post submit task
export const submitTask = async (
    task
  ) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASEURL}/task/create`,
        data: task,
      });
    } catch (err) {
      console.log();
    } finally {
        console.log();
    }
  };