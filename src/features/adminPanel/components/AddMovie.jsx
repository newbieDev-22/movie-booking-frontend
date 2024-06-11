import Button from "../../../components/Button";
import { PlusIcon } from "../../../icons";

export default function AddMovie() {
  return (
    <div className="pt-8 px-8 pb-4">
      <div className="text-2xl font-bold text-white">ADMIN PANEL</div>
      <div className="py-8 px-16">
        <Button color="white">
          <div className="h-20 flex justify-center items-center gap-6">
            <PlusIcon className={"h-8"} />
            <div className="text-3xl font-bold">ADD NEW MOVIE</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
