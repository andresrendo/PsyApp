import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../config";

  // HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email } = result.user;
      const body = {
        name: displayName,
        email
      }
      await createUserProfile({userId: result.user.uid, data: body});
      // const { isNewUser } = getAdditionalUserInfo(result);
    }catch (error) {
      console.error("GOOGLE SIGN IN FAILED", { error });
    }
  };
  
  export const registerWithEmailAndPassword = async ({email, password, name, lastName ,tipoUsuario}) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password, name, lastName, tipoUsuario);
      const { uid } = result.user;
      const body = {
        name,
        email,
        lastName,
        tipoUsuario,
      }
      await createUserProfile({userId: uid, data: body});
  
      // SUCCESS CALLBACK
      // if (onSuccess) {
      //   onSuccess();
      // }
    } catch (error) {
      console.error("REGISTER FAILED", { error });
      // if (onFail) {
      //   onFail();
      // }
    }
  };
  
  // HANDLE LOGIN WITH EMAIL AND PASSWORD
  export const loginWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("LOGIN FAILED", { error });
    }
  }
  
  // HANDLE USER SIGN OUT
  export const logout = async () => {
    try {
      await signOut(auth);
      

    } catch (error) {
      console.error("SIGN OUT FAILED", { error });
    }
  }; 