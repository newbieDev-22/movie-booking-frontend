import Button from "../../../components/Button";

export default function MovieFilter() {
  return (
    <div className="px-6 pt-6">
      <div className="grid grid-cols-6 gap-3">
        <Button color="white" bg="primary">
          <div className="font-bold">ALL</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">ACTION</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">ANIMATION</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">ADVENTURE</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">COMEDY</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">DRAMA</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">THRILLER</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">ROMANCE</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">HORROR</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">FANTASY</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">MUSICAL</div>
        </Button>
        <Button color="white" bg="nonActive">
          <div className="font-bold">CRIME</div>
        </Button>
      </div>
    </div>
  );
}
