import { Injectable } from "@angular/core";

import {addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";

import {User, iUser} from "./home.model"
import { AlertController } from "@ionic/angular";


@Injectable ({
    providedIn: 'root'
})

export class HomeService {
    newList: iUser[] = [];
    users: User = new User();

    constructor(private alertController: AlertController){

    }
    async getUsers(): Promise<iUser[]>{
        const app = initializeApp(environment.firebaseConfig);
        const firestore = getFirestore(app);

        const users: User[] = [];

        //to retrieve
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            const user=doc.data() as User;
            user.id = doc.id;
            users.push(user);
            
        
            
        });
        return users;
    }
    async tryAdd(user: User) {
        const app = initializeApp(environment.firebaseConfig);
        const firestore = getFirestore(app);

        try {
            //create method
            const docRefM1 = await addDoc(collection(firestore, "users"), {
                artist: user.artist,
                title: user.title,
                musicGenre: user.musicGenre,
                age: user.age,
                isActive: user.isActive,
                started: user.started,
            });
            console.log("Document written with ID: ", docRefM1.id);

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    async tryUpdate(user: User) {
        const app = initializeApp(environment.firebaseConfig);
        const firestore = getFirestore(app);

        try{
            const docRef = doc(firestore, "users", user.id);
            await updateDoc(docRef, {artist: user.artist,
                title: user.title,
                musicGenre: user.musicGenre,
                age: user.age,
                isActive: user.isActive,
                started: user.started,});

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    async tryDelete(user: User) {
        const app = initializeApp(environment.firebaseConfig);
        const firestore = getFirestore(app);

        try {
            const docRef = doc(firestore, "users", user.id);
            await deleteDoc(docRef);

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    async presentAlert(header: string, message: string) {
        const alert = await this.alertController.create({
          header: header,
          message: message,
          buttons: ['OK']
        });
        await alert.present();
      }
}