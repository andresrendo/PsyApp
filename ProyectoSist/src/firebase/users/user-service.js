
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../config';

export async function createUserProfile({userId, data}) {
    try{
        const docRef = doc(db, 'users', String(userId));
        return await setDoc(docRef, data);
    } catch (err) {
        console.log(err)
    }
}

export async function getUserProfile(email) {
    const userQuery = query(collection(db, 'users'), where('email', '==', email));
    const results = await getDocs(userQuery);

    if (results.size > 0) {
        const users = results.docs.map((item) => ({ 
        ...item.data(),
        id: item.id,
    }));

    const [user] = users;
    return user;
    } else {
        return null;
    }
}

export async function getDoctorByEspecialidad(especialidad) {
    const doctorQuery = query(
        collection(db, 'doctores'),
        where("especialidad", "==", especialidad))
    const results = await getDocs(doctorQuery);
    if(results.size > 0) {
        const doctores = results.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        
        return doctores;
    }else {
        return null;
    }
}