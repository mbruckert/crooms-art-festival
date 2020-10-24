import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonImg, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton } from '@ionic/react';
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
      db.collection("Photography").get().then(function(querySnapshot) {
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
            <IonBackButton/>
            </IonButtons>
            <IonTitle size="large" style={{fontSize: '30px'}}>{category}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {art.map((item) =>
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
        )}
      </IonContent>
    </IonPage>
  );
};

export default Category;
