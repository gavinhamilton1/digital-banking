import * as React from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { IonApp, IonRouterOutlet } from '@ionic/react';
import Login from './Login';

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
import Public from "./Public";
import TabBar from "./TabBar";
import Dashboard from "./Dashboard";


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} />
        <Route path="/public" component={Public} />
        <Route path="/tabbar" component={TabBar} />
        <Redirect exact from="/" to="/public" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

