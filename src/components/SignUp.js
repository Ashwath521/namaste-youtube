import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
const SignUp = () => {
  // const [signInValidate, setSignInValidate] = useState(true);

  // const [name, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Name is Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const {
    handleSubmit,
    values,
    errors,
    isValid,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      postData();
    },
    validationSchema: validationSchema,
  });
  console.log(errors);

  const postData = async () => {
    try {
      const response = await axios.post("http://localhost:4000/users", {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      console.log(response.data);
      console.log("data submitted");
      if (response.data !== "") {
        resetForm();
        navigate("/signin");
        toast.success("sign up successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <div className="flex flex-col bg-teal-100 w-96 h-96 mt-16 border ml-[400px] border-teal-200 items-center rounded-lg justify-center  shadow-lg">
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            className={`p-2 border border-teal-200 w-80 rounded-lg shadow-lg ${
              errors.name ? "mt-4" : "mt-8"
            } flex text-center input input-focus input-hover ${
              errors.name ? "input-error" : ""
            }`}
          />
          {errors.name && (
            <p className="text-left flex justify-start mr-44 text-orange-600 font-semibold  mt-2  ">
              {errors.name}
            </p>
          )}
          <input
            type="email"
            id="email"
            name="email"
            error={errors.email}
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className={`p-2 border border-teal-200 w-80 rounded-lg  ${
              errors.email ? "mt-4" : "mt-8"
            } text-center`}
          />
          {errors.email && (
            <p className="text-left flex justify-start mr-44 text-orange-600 font-semibold mt-2 rounded-md ">
              {errors.email}
            </p>
          )}
          <input
            type="text"
            // value={password}
            id="email"
            name="password"
            error={errors.password}
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`p-2  border border-teal-200 w-80 rounded-lg shadow-lg ${
              errors.password ? "mt-4" : "mt-8"
            } text-center`}
          />
          {errors.password && (
            <p className="text-left flex justify-start mr-44 text-orange-600 font-semibold   mt-2  ">
              {errors.password}
            </p>
          )}
          <button
            onClick={() => {
              if (!isValid) {
                toast.error("One or more field is empty");
              } else {
                handleSubmit();
                // resetForm();
              }
            }}
            type="button"
            className="p-3 bg-orange-500 w-20 justify-items-center mt-8 rounded-lg shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
