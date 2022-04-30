import { useState, useEffect } from "react";
import { Button } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { signIn, signOut } from "../../services/authService";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) setLoggedIn(true);
    }
  }, []);

  const login = async () => {
    try {
      await signIn();
    } catch (error: any) {
        console.log(error);
      toast.error(error.toString(), {
        autoClose: 2000,
      });
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setLoggedIn(false);
    } catch (error: any) {
      toast.error(error.toString(), {
        autoClose: 2000,
      });
    }
  };

  return (
    <header>
      <div className="p-5 flex flex-col items-center bg-gray-100 shadow-xl shadow-gray-200/50">
        <h2 className="text-4xl text-center font-bold text-slate-900 pb-2">
          Student Group Sorter
        </h2>
        <p className="text-lg text-center text-slate-700">
          Sort student into groups with intelligent algorithm
        </p>
        <div className="relative md:absolute top-6 right-0 mr-6 mb-8 md:mb-0">
        <Button
          onClick={loggedIn ? logout : login}
          value={loggedIn ? "Logout" : "G-Login"}
          width=""
          padding="px-12 py-3"
        />
      </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
