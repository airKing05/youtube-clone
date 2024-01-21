import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUMt4oigzR2Olf6agzXNn7Khk7kJ6c7vQ",
    authDomain: "yt-clone-961fd.firebaseapp.com",
    projectId: "yt-clone-961fd",
    storageBucket: "yt-clone-961fd.appspot.com",
    messagingSenderId: "15469094584",
    appId: "1:15469094584:web:3c9abb92c2dd432053f64d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


