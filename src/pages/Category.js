import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { db } from '../firebase';

var newArt = [];

const Category = () => {

  var url = window.location.pathname;
  var selectedName = url.replace("/gallery/", "");

  const [category, setCategory] = useState("");
  const [art, setArt] = useState([]);

  useEffect(() => {

    
    if(selectedName == "traditional"){
      setCategory("Traditional Art");
      db.collection("Traditional").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            newArt.push(doc.data());
        });
        setArt(newArt);
      });
    } else if(selectedName == "literary"){
      setCategory("Literary Works");
      db.collection("Literary").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            newArt.push(doc.data());
        });
        setArt(newArt);
      });
    } else if(selectedName == "digital"){
      setCategory("Digital Art");
      db.collection("Digital").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            newArt.push(doc.data());
        });
        setArt(newArt);
      });
    } else if(selectedName == "photography"){
      setCategory("Photography");
      db.collection("Photos").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            newArt.push(doc.data());
        });
        setArt(newArt);
      });
    }
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
        <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/gallery"></IonBackButton>
        </IonButtons>
        <IonTitle>{category}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-align-items-center">
        <IonRow>
        {art.map((item) =>
          <IonCol size="12" sizeMd="4" align-self-start>
          <IonCard mode="ios">
            <IonImg loading="lazy" src={item.image}></IonImg>
            <IonCardHeader>
              <IonCardSubtitle>{item.artist}</IonCardSubtitle>
              <IonCardTitle>{item.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {item.description}
            </IonCardContent>
          </IonCard> 
          </IonCol>
        )}
        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Category;
