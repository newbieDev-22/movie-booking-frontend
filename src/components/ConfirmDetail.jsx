import { useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

export default function ConfirmDetail({ msg, onClose, handleDeleteMovieEachMovie }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSumbit = () => {
    try {
      setIsLoading(true);
      handleDeleteMovieEachMovie();
      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner transparent />}
      <div className="flex flex-col p-2">
        <div className="pt-6 pb-8 text-lg text-white text-center">{msg}</div>
        <div className="flex px-2 gap-4">
          <Button bg="noBtn" onClick={onClose}>
            <div className="text-lg font-bold">No</div>
          </Button>
          <Button color="white" onClick={handleSumbit}>
            <div className="text-lg font-bold">Yes</div>
          </Button>
        </div>
      </div>
    </>
  );
}
