import axios from "axios";
import { toast } from "react-toastify";
export const generatePassword = ( history) => dispatch => {
    axios
      .post("/generate", )
      .then(res =>
        toast.success(
          "User Registered Successfully, now login again to continue.",
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
            hideProgressBar: true
          }
        )
      )
      
  };