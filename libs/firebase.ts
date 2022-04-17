import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = JSON.parse(atob(process.env.NEXT_PUBLIC_FIREBASE_CONFIG as string))

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const realtimeDB = ref(getDatabase(app))
export const auth = getAuth(app)
