import React, {useState, useEffect} from 'react';
import { IonContent, IonRadioGroup, IonButtons, IonBackButton, IonItemDivider, IonListHeader, IonLabel, IonRadio, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonIcon, IonButton, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { brush } from 'ionicons/icons';
import { db } from '../firebase';
import Lock from './lock.svg';
import Voted from './voted.svg';
import { useCookies } from 'react-cookie';

var newContestant = [];

const CostumeVote = () => {

  const [unlocked, setUnlocked] = useState(false);
  const [cookies, setCookie] = useCookies(['costumeVoted']);

  const [contestant, setContestant] = useState([]);
  const [selectedContestant, setSelectedContestant] = useState("");

  useEffect(() => {

    db.collection("Festival").doc("costumeVoting").get().then(function(doc) {
      setUnlocked(doc.data().allowed);
    });

    db.collection("Contestants").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          newContestant.push({id: doc.id, data: doc.data()});
      });
      setContestant(newContestant);
      setSelectedContestant(newContestant[0].id);
    });

  }, []);

  function submitVote(){
    db.collection("CostumeVotes").add({
      contestant: selectedContestant,
    })
    .then(function(docRef) {
        setCookie('costumeVoted', true);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  
  }
  
  return (
    <IonPage>
      <IonHeader mode="ios" collapse="condense" translucent={true}>
      <IonToolbar style={{paddingTop: '20px', paddingBottom: '10px'}}>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/vote"></IonBackButton>
        </IonButtons>
          <IonTitle>Costume Voting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {unlocked == true &&

        <div>

        {!cookies.costumeVoted &&

        <div>
          <IonList>
          <IonRadioGroup value={selectedContestant} onIonChange={e => setSelectedContestant(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Costumes</IonLabel>
            </IonListHeader>

            {contestant.map((art) =>
              <IonItem>
                <IonLabel><b>{art.data.name}</b></IonLabel>
                <IonLabel>{art.data.costume}</IonLabel>
                <IonRadio slot="start" value={art.id} />
              </IonItem>
            )}
          </IonRadioGroup>
        </IonList>
        <IonButton expand="block" style={{width: '90%', marginLeft: '5%', marginTop: '30px', marginBottom: '30px'}} onClick={submitVote}>Submit</IonButton>
        </div>
        }

        {cookies.costumeVoted &&
          <div>
            <img src={Voted} style={{width: '70%', marginLeft: '15%', marginTop: '20px'}} />
            <h1 style={{textAlign: 'center', fontWeight: '700', fontSize: '30px'}}>Thanks for Voting!</h1>
            <p style={{width: '80%', marginLeft: '10%', textAlign: 'center', fontWeight: '500', fontSize: '18px'}}>To keep the vote for art pieces fair, we restrict voting to once per person. Thanks for coming to the very first Arts Festival and we will announce the results soon.</p>
          </div>
        }

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

export default CostumeVote;
