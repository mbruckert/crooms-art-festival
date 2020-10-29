import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton } from '@ionic/react';
import { db } from '../firebase';

var traditional = [];
var digital = [];
var written = [];
var photos = [];

const Results = () => {

  const [traditionalResults, setTraditionalResults] = useState({});
  const [digitalResults, setDigitalResults] = useState({});
  const [writtenResults, setWrittenResults] = useState({});
  const [photosResults, setPhotosResults] = useState({});

  const [traditionalWinner, setTraditionalWinner] = useState("");
  const [digitalWinner, setDigitalWinner] = useState("");
  const [writtenWinner, setWrittenWinner] = useState("");
  const [photosWinner, setPhotosWinner] = useState("");

  useEffect(() => {
    db.collection("Votes").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            traditional.push(doc.data().traditional);
            digital.push(doc.data().digital);
            written.push(doc.data().literary);
            photos.push(doc.data().photos);
        });

        var traditionalRes = {};
        traditional.forEach(function(v) {
          traditionalRes[v] = (traditionalRes[v] || 0) + 1;
        });
        setTraditionalResults(traditionalRes);
        db.collection("Traditional").doc(Object.keys(traditionalRes).reduce((a, b) => traditionalRes[a] > traditionalRes[b] ? a : b)).get().then(function(doc) {
          setTraditionalWinner(doc.data().artist + " - " + doc.data().name);
        });

        var digitalRes = {};
        digital.forEach(function(v) {
          digitalRes[v] = (digitalRes[v] || 0) + 1;
        });
        setDigitalResults(digitalRes);
        db.collection("Digital").doc(Object.keys(digitalRes).reduce((a, b) => digitalRes[a] > digitalRes[b] ? a : b)).get().then(function(doc) {
          setDigitalWinner(doc.data().artist + " - " + doc.data().name);
        });

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
  }, []);


  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonTitle size="large">Results</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Traditional Winner: {traditionalWinner} <br />
        Literary Works Winner: {writtenWinner} <br />
        Digital Winner: {digitalWinner} <br />
        Photography Winner: {photosWinner} <br />
      </IonContent>
    </IonPage>
  );
};

export default Results;
