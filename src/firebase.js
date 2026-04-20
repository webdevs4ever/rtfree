import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const requiredKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

export function getFirebaseConfigError() {
  if (requiredKeys.length === 0) {
    return "";
  }

  return `Missing Firebase config: ${requiredKeys.join(", ")}`;
}

let firestoreInstance;

export function getDb() {
  const configError = getFirebaseConfigError();

  if (configError) {
    throw new Error(configError);
  }

  if (!firestoreInstance) {
    const app = initializeApp(firebaseConfig);
    firestoreInstance = getFirestore(app);
  }

  return firestoreInstance;
}
