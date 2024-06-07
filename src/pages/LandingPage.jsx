import ImageCarousel from "../components/ImageCarousel";
import LandingImage1 from "../assets/landingImage/landingImage1.jpg";
import LandingImage2 from "../assets/landingImage/landingImage2.jpg";
import LandingImage3 from "../assets/landingImage/landingImage3.jpg";
import LandingImage4 from "../assets/landingImage/landingImage4.jpg";
import LoginForm from "../features/authentication/components/LoginForm";
import Modal from "../components/Modal";
import RegisterForm from "../features/authentication/components/RegisterForm";
import useAuth from "../hooks/useAuth";

const imagePathList = [LandingImage1, LandingImage2, LandingImage3, LandingImage4];

export default function LandingPage() {
  const { loginOpen, setLoginOpen, registerOpen, setRegisterOpen } = useAuth();
  return (
    <div className="bg-[#121212] min-h-[calc(100vh-5rem)] overflow-hidden text-white">
      <div className="h-[40rem] my-20 flex justify-center px-8 items-center overflow-hidden rounded-box">
        <ImageCarousel imagePathList={imagePathList} />
        <Modal open={loginOpen} title="LOGIN FORM" onClose={() => setLoginOpen(false)}>
          <LoginForm onSuccess={() => setRegisterOpen(false)} />
        </Modal>
        <Modal
          open={registerOpen}
          title="REGISTER FORM"
          onClose={() => setRegisterOpen(false)}
        >
          <RegisterForm onSuccess={() => setRegisterOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}
