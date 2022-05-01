import { auth } from "../libs/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { axiosIns, setHeaders } from "../libs/axios";

export const googleAuthProvider = new GoogleAuthProvider();

export const signIn = async () => {
  let result;
  await signInWithPopup(auth, googleAuthProvider).then(async (res) => {
    if (res.user.email?.endsWith("@my.sliit.lk")) {
      if (typeof window !== "undefined") {
        const token = await auth.currentUser?.getIdToken(true);
        window.localStorage.setItem("token", token as string);
        setHeaders({
          Authorization: `Bearer ${token}`,
        });
        window.localStorage.setItem("userData", JSON.stringify(res.user));
      }
      return axiosIns.post("/user");
    } else {
      auth.signOut();
      throw new Error("You must use a SLIIT email address to sign in");
    }
  });
  return result;
};

export const signOut = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userData");
  }
  return auth.signOut();
};

export const getCurrentUser = () => {
  return axiosIns.get("/user/current");
};
