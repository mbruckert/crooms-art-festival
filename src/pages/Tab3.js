import React, {useState, useEffect} from 'react';
import { IonContent, IonRadioGroup, IonItemDivider, IonListHeader, IonLabel, IonRadio, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { brush } from 'ionicons/icons';
import { db } from '../firebase';
import Lock from './lock.svg';

var newTraditional = [];
var newLiterary = [];
var newDigital = [];
var newPhotos = [];

const Tab3 = () => {

  const [unlocked, setUnlocked] = useState(false);

  const [traditional, setTraditional] = useState([]);
  const [selectedTraditional, setSelectedTraditional] = useState("");

  const [literary, setLiterary] = useState([]);
  const [selectedLiterary, setSelectedLiterary] = useState("");

  const [digital, setDigital] = useState([]);
  const [selectedDigital, setSelectedDigital] = useState("");

  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState("");

  useEffect(() => {

    db.collection("Festival").doc("voting").get().then(function(doc) {
      setUnlocked(doc.data().allowed);
    });

    db.collection("Traditional").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newTraditional.push({id: doc.id, data: doc.data()});
      });
      setTraditional(newTraditional);
      setSelectedTraditional(newTraditional[0].id);
      console.log(newTraditional[0].id);
    });

    db.collection("Literary").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newLiterary.push({id: doc.id, data: doc.data()});
      });
      setLiterary(newLiterary);
      setSelectedLiterary(newLiterary[0].id);
    });

    db.collection("Digital").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newDigital.push({id: doc.id, data: doc.data()});
      });
      setDigital(newDigital);
      console.log(newDigital);
      setSelectedDigital(newDigital[0].id);
    });

    db.collection("Photos").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newPhotos.push({id: doc.id, data: doc.data()});
      });
      setPhotos(newPhotos);
      setSelectedPhotos(newPhotos[0].id);
    });

  }, []);
  

  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
          <IonTitle size="large" style={{fontSize: '30px'}}>Vote</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {unlocked == true &&
        <div>
          <IonList>
          <IonRadioGroup value={selectedTraditional} onIonChange={e => setSelectedTraditional(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Traditional Art</IonLabel>
            </IonListHeader>

            {traditional.map((art) =>
              <IonItem>
                <IonLabel>{art.data.name}</IonLabel>
                <IonRadio slot="start" value={art.data.id} />
              </IonItem>
            )}
          </IonRadioGroup>
          <IonRadioGroup value={selectedLiterary} onIonChange={e => setSelectedLiterary(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Literary Works</IonLabel>
            </IonListHeader>

            {literary.map((art) =>
              <IonItem>
                <IonLabel>{art.data.name}</IonLabel>
                <IonRadio slot="start" value={art.data.id} />
              </IonItem>
            )}
          </IonRadioGroup>

          <IonRadioGroup value={selectedDigital} onIonChange={e => setSelectedDigital(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Digital Art</IonLabel>
            </IonListHeader>

            {digital.map((art) =>
              <IonItem>
                <IonLabel>{art.data.name}</IonLabel>
                <IonRadio slot="start" value={art.data.id} />
              </IonItem>
            )}
          </IonRadioGroup>

          <IonRadioGroup value={selectedPhotos} onIonChange={e => setSelectedPhotos(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Photography</IonLabel>
            </IonListHeader>

            {photos.map((art) =>
              <IonItem>
                <IonLabel>{art.data.name}</IonLabel>
                <IonRadio slot="start" value={art.data.id} />
              </IonItem>
            )}
          </IonRadioGroup>
        </IonList>
        <IonButton expand="block" style={{width: '90%', marginLeft: '5%', marginTop: '30px', marginBottom: '30px'}}>Submit</IonButton>
        </div>
        }

        {unlocked == false &&
          <div>
            <img src={Lock} style={{width: '70%', marginLeft: '15%', marginTop: '20px'}} />
            <h1 style={{textAlign: 'center', fontWeight: '700', fontSize: '30px'}}>Voting is Locked</h1>
            <p style={{width: '80%', marginLeft: '10%', textAlign: 'center', fontWeight: '500', fontSize: '18px'}}>Voting isn't open right now. This means that either the event hasn't started yet, or the voting period is over.</p>
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
