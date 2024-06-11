import Button from "../components/Button";
import Input from "../components/Input";
import { PlusIcon } from "../icons";

export default function AdminPanel() {
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] min-w-[1275px]">
      <div className="pt-8 px-6 pb-4">
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
      <div className="pt-8 px-6 pb-4">
        <div className="text-2xl font-bold text-white">FIND MOVIES</div>
        <div className="py-8 px-6 grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <Input placeholder="Fill a movie name or genres" />
          </div>
          <div>
            <Button color="white">
              <div className="font-semibold text-xl">Search</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
