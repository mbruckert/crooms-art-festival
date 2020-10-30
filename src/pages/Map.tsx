import React from 'react';
import { IonCard, IonButtons, IonBackButton, IonGrid, IonRow, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonImg, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
        <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonImg src="https://firebasestorage.googleapis.com/v0/b/crooms-arts-festival.appspot.com/o/Map-1.png?alt=media&token=0038bea8-50e5-41b3-8d9d-79024508e04b" />
      <IonImg src="https://firebasestorage.googleapis.com/v0/b/crooms-arts-festival.appspot.com/o/Map-2.png?alt=media&token=a6c4dc91-861d-4c61-b63d-2caf92f0efbb" />
      </IonContent>
    </IonPage>
  );
};

export default Map;
