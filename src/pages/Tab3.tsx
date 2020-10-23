import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { brush } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
          <IonTitle size="large" style={{fontSize: '30px'}}>Vote</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList style={{width: '100%', marginTop: '0px'}} className="list">
            <IonItem className="ion-no-padding" button={true} mode="ios">
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Traditional Art</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-no-padding" button={true} mode="ios">
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Literary Works</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-no-padding" button={true} mode="ios">
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Digital Art</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-no-padding" button={true} mode="ios">
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Photography</h4>
              </IonText>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
