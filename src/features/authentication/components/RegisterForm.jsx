import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validators/validate-register";
import authApi from "../../../apis/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const textColor = "text-[#DBD9DD]";

export default function RegisterForm({ onSuccess }) {
  const initialInput = {
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const initialInputError = {
    email: "",
    name: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const handleInputChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSumbitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateRegister(input);
      if (error) {
        setInputError((prev) => ({ ...prev, ...error }));
      } else {
        setInputError((prev) => ({ ...prev, ...initialInputError }));
      }

      await authApi.register(input);
      onSuccess();
      toast.success("Registered successfully, please log in to continue", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.data.field === "email") {
          setInputError((prev) => ({
            ...prev,
            email: "Email is already in use",
          }));
        }
        if (err.response.data.field === "phone") {
          setInputError((prev) => ({
            ...prev,
            phone: "Phone number is already in use",
          }));
        }
      }
    }
  };
  console.log("inputError", inputError);

  return (
    <form onSubmit={handleSumbitForm}>
      <div className="grid grid-cols-2 p-1 gap-x-4">
        <label className="form-control w-full col-span-2">
          <div className="label">
            <span className={`label-text ${textColor} `}>Email</span>
          </div>
          <Input
            placeholder="Email Address"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            error={inputError.email}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className={`label-text ${textColor} `}>Name</span>
          </div>
          <Input
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            error={inputError.name}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className={`label-text ${textColor} `}>Phone Number</span>
          </div>
          <Input
            placeholder="Phone Number"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            error={inputError.phone}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className={`label-text ${textColor} `}>Password</span>
          </div>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            error={inputError.password}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className={`label-text ${textColor} `}>Confirm Password</span>
          </div>
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleInputChange}
            error={inputError.confirmPassword}
          />
        </label>

        <div className="col-span-2 pt-6">
          <Button color="white">
            <div className="text-xl font-bold">SIGN UP</div>
          </Button>
        </div>
      </div>
    </form>
  );
}
