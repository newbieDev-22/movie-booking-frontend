import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function RegisterForm({ onSuccess }) {
  return (
    <form>
      <div className="grid gap-6 p-2">
        <div>
          <Input placeholder="Email Address" />
        </div>
        <div>
          <Input placeholder="Name" />
        </div>
        <div>
          <Input placeholder="Phone Number" />
        </div>
        <div>
          <Input placeholder="Password" type="password" />
        </div>
        <div>
          <Input placeholder="Confirm Password" type="password" />
        </div>
        <div>
          <Button onClick={onSuccess}>
            <div className="text-xl font-bold">REGISTER</div>
          </Button>
        </div>
      </div>
    </form>
  );
}
