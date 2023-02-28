import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    }catch (error) {
    }
}

export const registerwithemailandpassword = async () => {}

export const loginwithemailandpassword = async () => {}

export const logout = async () => {}