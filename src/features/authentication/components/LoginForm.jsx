import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function LoginForm({ onSuccess }) {
  return (
    <form>
      <div className="grid gap-6 p-2">
        <div>
          <Input placeholder="Email Address" />
        </div>
        <div>
          <Input placeholder="Password" type="password" />
        </div>
        <div>
          <Button onClick={onSuccess}>
            <div className="text-xl font-bold">LOG IN</div>
          </Button>
        </div>
      </div>
    </form>
  );
}
