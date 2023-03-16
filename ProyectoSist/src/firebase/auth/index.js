import { signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../config";
import { createUserProfile } from "../users/user-service";

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
    // try {
      const result = await createUserWithEmailAndPassword(auth, email, password, name, lastName, tipoUsuario);
      const { uid } = result.user;
      const body = {
        name,
        email,
        lastName,
        tipoUsuario,
        password,
      }
      await createUserProfile({userId: uid, data: body});
  
    //   // SUCCESS CALLBACK
    //   // if (onSuccess) {
    //   //   onSuccess();
    //   // }
    // } catch (error) {
    //   console.error("REGISTER FAILED", { error });
    //   // if (onFail) {
    //   //   onFail();
    //   // }
    // }
  };
  
  // HANDLE LOGIN WITH EMAIL AND PASSWORD
  export const loginWithEmailAndPassword = async (email, password) => {
    // try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    // } catch (error) {
    //   console.error("LOGIN FAILED", { error });
    //   console.log(error);
    //   let message;
    //     switch (error.code) {
    //         case "auth/invalid-email":
    //           message = "El correo electrónico no es válido.";
    //           break;
    //         case "auth/user-disabled":
    //           message = "El usuario ha sido deshabilitado.";
    //           break;
    //         case "auth/user-not-found":
    //           message = "El usuario no existe.";
    //           break;
    //         case "auth/wrong-password":
    //           message = "La contraseña no es válida.";
    //           break;
    //         default:
    //           message = "Ocurrió un error al intentar acceder.";
    //         }
    //         alert(message);
    // }
  }
  
  // HANDLE USER SIGN OUT
  export const logout = async () => {
    try {
      await signOut(auth);
      

    } catch (error) {
      console.error("SIGN OUT FAILED", { error });
    }
  }; 