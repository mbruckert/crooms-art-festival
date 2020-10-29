import React, {useState, useEffect} from 'react';
import { IonContent, IonRadioGroup, IonItemDivider, IonListHeader, IonLabel, IonRadio, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonIcon, IonButton, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { brush } from 'ionicons/icons';
import { db } from '../firebase';
import Lock from './lock.svg';
import Voted from './voted.svg';
import { useCookies } from 'react-cookie';

var newTraditional = [];
var newLiterary = [];
var newDigital = [];
var newPhotos = [];

const Tab3 = () => {

  const [unlocked, setUnlocked] = useState(false);
  const [cookies, setCookie] = useCookies(['voted']);

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

  function submitVote(){
    db.collection("Votes").add({
      traditional: selectedTraditional,
      literary: selectedLiterary,
      digital: selectedDigital,
      photos: selectedPhotos
    })
    .then(function(docRef) {
        setCookie('voted', true);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  
  }
  
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
          <IonTitle size="large" style={{fontSize: '30px'}}>Vote</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonList style={{width: '100%', marginTop: '0px'}} className="list ion-no-padding">
            <IonItem className="ion-no-padding" button={true} mode="ios" onClick={() => window.location.href = "/vote/art"}>
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Art Voting</h4>
              </IonText>
            </IonItem>
            <IonItem className="ion-no-padding" button={true} mode="ios" onClick={() => window.location.href = "/vote/costume"}>
              <IonText style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <h4 style={{marginLeft: '20px', marginTop: '10px'}}>Costume Contest Voting</h4>
              </IonText>
            </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
