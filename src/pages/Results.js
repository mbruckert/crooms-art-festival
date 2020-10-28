import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton } from '@ionic/react';
import { db } from '../firebase';

var traditional = [];

const Results = () => {

  useEffect(() => {
    db.collection("Votes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if(traditional.includes(doc.data().traditional)){
                console.log(doc.data());
            } else{
                console.log(doc.data()); 
            }
        });
      });
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonTitle size="large">Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
      </IonContent>
    </IonPage>
  );
};

export default Results;
