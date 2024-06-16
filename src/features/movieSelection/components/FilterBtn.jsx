import Button from "../../../components/Button";
import { FILTER_BTN_COLOR_MAP } from "../../../constants";

export default function FilterBtn({ genre, btnState, cb }) {
  return (
    <Button color="white" bg={FILTER_BTN_COLOR_MAP[btnState[genre]]} onClick={cb}>
      {genre}
    </Button>
  );
}
