import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, home, image, square, triangle, archive } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3.js';
import { CookiesProvider } from 'react-cookie';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Category from './pages/Category.js';
import Welcome from './pages/Welcome.js';
import Results from './pages/Results';
import Schedule from './pages/Schedule';
import Map from './pages/Map';
import ArtVote from './pages/ArtVote';
import CostumeVote from './pages/CostumeVote';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Tab1} exact={true} />
          <Route path="/gallery" component={Tab2} exact={true} />
          <Route path="/gallery/:category" component={Category} />
          <Route path="/vote" component={Tab3} exact={true} />
          <Route path="/vote/art" component={ArtVote} exact={true} />
          <Route path="/vote/costume" component={CostumeVote} exact={true} />
          <Route path="/results" component={Results} exact={true} />
          <Route path="/schedule" component={Schedule} exact={true} />
          <Route path="/map" component={Map} exact={true} />
          <Route path="/" component={Welcome} exact={true} />
        </IonRouterOutlet>
        <IonTabBar mode="ios" slot="bottom" style={{paddingTop: '10px', paddingBottom: '15px'}}>
          <IonTabButton tab="tab1" href="/home" mode="ios">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/gallery" mode="ios">
            <IonIcon icon={image} />
            <IonLabel>Gallery</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/vote" mode="ios">
            <IonIcon icon={archive} />
            <IonLabel>Vote</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;