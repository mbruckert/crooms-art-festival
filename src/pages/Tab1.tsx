import React from 'react';
import { IonCard, IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, IonItem, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonImg src="https://lh3.googleusercontent.com/proxy/2tqybbnK95MrQPKfq8BE73XmssHN1TcOFnNofruuEuACCrbswatJBBtxTgIs0FzLJW51MSp1qzTYrH3jeTilG3yHp2-nZ3T3L1mGExDpwevYKT-oC_30YxTZJr8ejdLrHwejvhp-Qi6xfoirbC-mBiHVco6pwQHowCMS" />
          <IonCardHeader>
            <IonCardSubtitle>View Student Art</IonCardSubtitle>
            <IonCardTitle>Art Guide</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
        <IonImg src="https://cdn.cnn.com/cnnnext/dam/assets/181101114340-cnn-special-report-voter-suppression-democracy-in-peril-ron-7-00002105-exlarge-169.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>Pick Your Favorites</IonCardSubtitle>
            <IonCardTitle>Vote Now</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
        <IonImg src="https://paysimple.com/blog/wp-content/uploads/2018/02/hand-putting-coins-in-glass-jar-for-giving-and-donation-concept-picture-id813128966.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>Help our Students</IonCardSubtitle>
            <IonCardTitle>Make a Donation</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
