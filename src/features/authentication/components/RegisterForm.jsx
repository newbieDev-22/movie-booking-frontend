import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validators/validate-register";
import authApi from "../../../apis/auth";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

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
      <div className="grid gap-4 p-2">
        <div>
          <Input
            placeholder="Email Address"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            error={inputError.email}
          />
        </div>
        <div>
          <Input
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            error={inputError.name}
          />
        </div>
        <div>
          <Input
            placeholder="Phone Number"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            error={inputError.phone}
          />
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
        <div>
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleInputChange}
            error={inputError.confirmPassword}
          />
        </div>
        <div>
          <Button>
            <div className="text-xl font-bold">REGISTER</div>
          </Button>
        </div>
      </div>
    </form>
  );
}
