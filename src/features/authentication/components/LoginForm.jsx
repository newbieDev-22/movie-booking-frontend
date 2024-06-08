import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import validateLogin from "../validators/validate-login";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const initialInput = {
  email: "",
  password: "",
};

const initialInputError = {
  email: "",
  password: "",
};

const textColor = "text-[#DBD9DD]";

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        setInputError((prev) => ({ ...prev, ...error }));
      } else {
        setInputError((prev) => ({ ...prev, ...initialInputError }));
        await login(input);
        navigate("/");
        toast.success("Login successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        const message =
          err.response.status === 400
            ? "Invalid email or password"
            : "Internet Server Error";
        return toast.error(message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid p-1">
        <label className="form-control w-full">
          <div className="label">
            <span className={`label-text ${textColor} `}>Email Address</span>
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
            <span className={`label-text ${textColor} `}>Password</span>
          </div>
          <div>
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              error={inputError.password}
            />
          </div>
        </label>

        <div className="pt-6">
          <Button color="white">
            <div className="text-xl font-bold">LOG IN</div>
          </Button>
        </div>
      </div>
    </form>
  );
}
