import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"piecito-6732b","appId":"1:1006931364128:web:b513ffbb5c0cac4791ef45","storageBucket":"piecito-6732b.appspot.com","apiKey":"AIzaSyBrJqU-7sBI0I9agOI1jBQuN1aKUsg_0X4","authDomain":"piecito-6732b.firebaseapp.com","messagingSenderId":"1006931364128"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
