import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "./config";

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    }catch (error) {
    }
}

export const registerwithemailandpassword = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        console.error({error});
    }
}

export const loginwithemailandpassword = async () => {}

export const logout = async () => {
    try {
        await signOut(auth);
        console.log(auth)
    } catch (error) {
    console.error({error});}
}