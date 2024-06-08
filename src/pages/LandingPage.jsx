import LandingImage1 from "../assets/landingImage/1.jpg";
import LandingImage2 from "../assets/landingImage/2.jpg";
import LandingImage3 from "../assets/landingImage/3.jpg";
import LandingImage4 from "../assets/landingImage/4.jpg";
import LoginForm from "../features/authentication/components/LoginForm";
import Modal from "../components/Modal";
import RegisterForm from "../features/authentication/components/RegisterForm";
import useAuth from "../hooks/useAuth";
import Carousal from "../components/Carousal";

const imagePathList = [LandingImage1, LandingImage2, LandingImage3, LandingImage4];

export default function LandingPage() {
  const { loginOpen, setLoginOpen, registerOpen, setRegisterOpen } = useAuth();
  return (
    <>
      <div className="bg-black">
        <div className="min-w-screen min-h-[calc(100vh_-_72px)] box-border">
          <Carousal autoSlide={true} autoSlideInterval={2000}>
            {imagePathList.map((el) => {
              const splitName = el.split("/");
              const key = splitName[splitName.length - 1];
              return (
                <img
                  key={key}
                  src={el}
                  alt="landing"
                  className="min-w-screen min-h-[calc(100vh_-_72px)]"
                />
              );
            })}
          </Carousal>
        </div>
        <Modal open={loginOpen} title="Welcome" onClose={() => setLoginOpen(false)}>
          <LoginForm onSuccess={() => setRegisterOpen(false)} />
        </Modal>
        <Modal
          open={registerOpen}
          title="Register Form"
          onClose={() => setRegisterOpen(false)}
          width="40"
          color="white"
        >
          <RegisterForm onSuccess={() => setRegisterOpen(false)} />
        </Modal>
      </div>
    </>
  );
}
