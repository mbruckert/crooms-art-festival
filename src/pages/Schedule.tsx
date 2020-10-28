import React from 'react';
import { IonCard, IonButtons, IonBackButton, IonGrid, IonRow, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonImg, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Schedule: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home"></IonBackButton>
        </IonButtons>
        <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <table id="customers">
        <tr>
          <th>Event Time</th>
          <th>Event Name</th>
        </tr>
        <tr>
          <td>5:00pm</td>
          <td>Open Doors</td>
        </tr>
        <tr>
          <td>5:00 - 6:30pm</td>
          <td>General Events</td>
        </tr>
        <tr>
          <td>6:30 - 7:00pm</td>
          <td>Costume Contest</td>
        </tr>
        <tr>
          <td>7:00 - 8:00pm</td>
          <td>General Events</td>
        </tr>
        <tr>
          <td>8:00pm</td>
          <td>Close Doors</td>
        </tr>
      </table>
      </IonContent>
    </IonPage>
  );
};

export default Schedule;
