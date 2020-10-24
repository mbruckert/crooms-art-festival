import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton } from '@ionic/react';
import { db } from '../firebase';
import Logo from './art-logo.png'

const Welcome = () => {

  return (
    <IonPage>
      <IonContent >
        <img src={Logo} style={{width: '50%', marginLeft: '25%', marginTop: '20px'}}/>
        <h1 style={{width: '70%', marginLeft: '15%', textAlign: 'center'}}>Welcome to the Crooms Arts Festival!</h1>
        <p style={{width: '80%', marginLeft: '10%', textAlign: 'center'}}>Crooms Leadership has been working extremely hard to put on an event for our students, staff, and parents that showcases our student's unique talents. Feel free to look through this app for the art pieces, vote for your favorites, and donate if you want to see more events like this in the future.</p>
        <IonButton style={{width: '80%', marginLeft: '10%', textAlign: 'center'}} onClick={() => window.location.href = "/home"} mode="ios">Open App</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
