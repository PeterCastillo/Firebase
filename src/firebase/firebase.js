import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage , ref , uploadBytes , getDownloadURL , getBytes } from "firebase/storage"
import { getFirestore , collection , addDoc , getDocs , doc , getDoc , query , where , setDoc , deleteDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD3G9iCuv5Dfz6JxqCPg0_xonSwsAie0Bo",
  authDomain: "treelink-tutorial-9e900.firebaseapp.com",
  projectId: "treelink-tutorial-9e900",
  storageBucket: "treelink-tutorial-9e900.appspot.com",
  messagingSenderId: "1018966501072",
  appId: "1:1018966501072:web:57adc4c38cad9056a360d5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export async function userExist(uid) {
    const docRef = doc(db, 'users', uid)
    const res = await getDoc(docRef)
    return res.exists();
}

export async function existsUserName(username){
  const userrs = []
  const docsRef = collection(db,"users")
  const q = query(docsRef, where("username","==", username))
  const querySnapShot = await getDocs(q)

  querySnapShot.forEach(doc => {
    userrs.push(doc.data())
  })
  return userrs.length > 0 ? userrs[0].uid : null;
}

export const registerNewUser = async(user) => {
  try {
    const collectionRef = collection(db,"users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef,user)
  } catch(error){
    console.log(error)
  }
}

export const upDateUser = async(user) => {
  try {
    const collectionRef = collection(db,"users")
    const docRef = doc(collectionRef, user.uid)
    await setDoc(docRef,user)
  } catch(error){
    console.log(error)
  }
}

export const getUserInfo = async(uid) => {
  try {
    const docRef = doc(db,'users',uid)
    const document = await getDoc(docRef)
    return document.data()
  } catch(error){
    console.log(error)
  }
}
