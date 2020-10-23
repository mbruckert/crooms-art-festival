import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonButtons, IonBackButton } from '@ionic/react';

const Category: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
            <IonButtons slot="start">
            <IonBackButton/>
            </IonButtons>
            <IonTitle size="large" style={{fontSize: '30px'}}>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList style={{width: '100%', marginTop: '0px'}} className="list">
            <IonItem className="ion-no-padding" button={true} mode="ios">
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Traditional Art</h4>
              </IonText>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Category;
