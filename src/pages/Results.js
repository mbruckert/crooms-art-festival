import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton } from '@ionic/react';
import { db } from '../firebase';

var traditional = [];
<<<<<<< Updated upstream

const Results = () => {

=======
var digital = [];
var written = [];
var photos = [];
var costumes = [];

const Results = () => {

  const [traditionalResults, setTraditionalResults] = useState({});
  const [digitalResults, setDigitalResults] = useState({});
  const [writtenResults, setWrittenResults] = useState({});
  const [photosResults, setPhotosResults] = useState({});
  const [costumeResults, setCostumeResults] = useState({});

  const [traditionalWinner, setTraditionalWinner] = useState("");
  const [digitalWinner, setDigitalWinner] = useState("");
  const [writtenWinner, setWrittenWinner] = useState("");
  const [photosWinner, setPhotosWinner] = useState("");
  const [costumeWinner, setCostumeWinner] = useState("");

>>>>>>> Stashed changes
  useEffect(() => {
    db.collection("Votes").get().then(function(querySnapshot) {
      console.log(querySnapshot);
        querySnapshot.forEach(function(doc) {
            if(traditional.includes(doc.data().traditional)){
                console.log(doc.data());
            } else{
                console.log(doc.data()); 
            }
        });
<<<<<<< Updated upstream
      });
=======

        var writtenRes = {};
        written.forEach(function(v) {
          writtenRes[v] = (writtenRes[v] || 0) + 1;
        });
        setWrittenResults(writtenRes);
        db.collection("Literary").doc(Object.keys(writtenRes).reduce((a, b) => writtenRes[a] > writtenRes[b] ? a : b)).get().then(function(doc) {
          setWrittenWinner(doc.data().artist + " - " + doc.data().name);
        });

        var photosRes = {};
        photos.forEach(function(v) {
          photosRes[v] = (photosRes[v] || 0) + 1;
        });
        setPhotosResults(photosRes);
        db.collection("Photos").doc(Object.keys(photosRes).reduce((a, b) => photosRes[a] > photosRes[b] ? a : b)).get().then(function(doc) {
          setPhotosWinner(doc.data().artist + " - " + doc.data().name);
        });
    });

    db.collection("CostumeVotes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            costumes.push(doc.data().contestant);
        });

        var costumeRes = {};
        costumes.forEach(function(v) {
          costumeRes[v] = (costumeRes[v] || 0) + 1;
        });
        setCostumeResults(costumeRes);
        console.log(costumeRes);
        db.collection("Contestants").doc(Object.keys(costumeRes).reduce((a, b) => costumeRes[a] > costumeRes[b] ? a : b)).get().then(function(doc) {
          setCostumeWinner(doc.data().name + " - " + doc.data().costume);
        });
    });
>>>>>>> Stashed changes
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonTitle size="large">Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<<<<<<< Updated upstream
        
=======
        Traditional Winner: {traditionalWinner} <br />
        Literary Works Winner: {writtenWinner} <br />
        Digital Winner: {digitalWinner} <br />
        Photography Winner: {photosWinner} <br />
        Costume Contest Winner: {costumeWinner} <br />
>>>>>>> Stashed changes
      </IonContent>
    </IonPage>
  );
};

export default Results;
