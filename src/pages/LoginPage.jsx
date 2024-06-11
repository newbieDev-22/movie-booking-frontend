import Button from "../components/Button";
import Modal from "../components/Modal";
import LoginForm from "../features/authentication/components/LoginForm";
import RegisterForm from "../features/authentication/components/RegisterForm";
import useAuth from "../hooks/useAuth";
import LoginImage1 from "../assets/landingImage/login1.jpg";
import LoginImage2 from "../assets/landingImage/login2.jpg";
import LoginImage3 from "../assets/landingImage/login3.jpg";
import Carousal from "../components/Carousal";

const imagePathList = [LoginImage1, LoginImage2, LoginImage3];

export default function LoginPage() {
  const { registerOpen, setRegisterOpen } = useAuth();

  return (
    <>
      <div className="flex h-screen bg-black gap-1 min-w-[1275px] overflow-hidden">
        <div className="w-3/5 m-auto">
          <div className="h-full flex justify-center items-center p-3">
            <Carousal autoSlide={true} autoSlideInterval={4000}>
              {imagePathList.map((el) => {
                const splitName = el.split("/");
                const key = splitName[splitName.length - 1];
                return <img key={key} src={el} alt="landing" className="rounded-xl" />;
              })}
            </Carousal>
          </div>
        </div>
        <div className=" w-2/5 px-28 my-auto flex flex-col min-w-[400px]">
          <div className="text-6xl py-6 font-bold text-center text-[#DBD9DD]">
            Welcome
          </div>
          <div className="py-">
            <LoginForm onSuccess={() => setRegisterOpen(false)} />
          </div>
          <div className="py-4">
            <div className="border border-b border-[#D9D9D9]/50 my-2 mx-4"></div>
            <div className="relative pt-2">
              <div className="absolute text-[#DBD9DD] bottom-1/2 left-1/2 -translate-x-2/4 bg-black px-4 font-bold">
                OR
              </div>
            </div>
          </div>
          <div>
            <Button color="white" onClick={setRegisterOpen}>
              <div className="text-xl font-bold">Register</div>
            </Button>
          </div>
        </div>
      </div>
      <Modal
        open={registerOpen}
        title="Register Form"
        onClose={() => setRegisterOpen(false)}
        width="40"
        color="white"
      >
        <RegisterForm onSuccess={() => setRegisterOpen(false)} />
      </Modal>
    </>
  );
}
