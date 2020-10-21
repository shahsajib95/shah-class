
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';

export const initializeLoginFrameWork = () => {
    if(firebase.apps.length === 0){ 
firebase.initializeApp(firebaseConfig)
    };
}

    export const faceBookLogin = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(fbProvider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signInFbUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            return signInFbUser;
        })
    }
    export const signinwithgoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signInGoogleUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            return signInGoogleUser;
        })
    }

    export const signOut = () =>{
        return firebase.auth().signOut()
    }

    export const CreateUserWithPassword = (email, password) =>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res=>{
                const newUserInfo = res.user;
                return newUserInfo;
            })
            .catch(error=>{
                const newUserInfo = error.user;
                newUserInfo.error = error.message;
                console.log(error)
                return newUserInfo;
            })
    }

    export const signInWithPassword =(email, password) =>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=>{
            const newUserInfo = res.user;
                return newUserInfo;
        })
        .catch(error=>{
            const newUserInfo = {};
            console.log(error)
            return newUserInfo;
        })
    }