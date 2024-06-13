import Button from "../../../components/Button";
import { filterBtnBgColorMapping } from "../../../constants";

export default function FilterBtn({ genre, btnState, cb }) {
  return (
    <Button color="white" bg={filterBtnBgColorMapping[btnState[genre]]} onClick={cb}>
      {genre}
    </Button>
  );
}
