import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4">
        <div className="pt-10 text-center">WELCOME TO DELISOME WEB</div>
        <button
          className="px-4 py-2 mt-4 w-full bg-purple-600 rounded-xl text-white"
          onClick={() => navigate("/")}
        >
          ENTER APPS
        </button>
      </div>
    </>
  );
}
