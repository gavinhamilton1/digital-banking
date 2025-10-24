import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import './public.css';
import { Redirect, Route } from 'react-router-dom';
import AccordionTest from './ActionItems';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import LottieSequenceComponent from './LottieSequenceComponent';


const TabBar: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabbar" to="/tabbar/dashboard" />

        <Route path="/tabbar/dashboard" render={() => <Dashboard />} exact={true} />
        <Route path="/tabbar/accounts" render={() => <Accounts />} exact={true} />
        <Route path="/tabbar/video" render={() => <LottieSequenceComponent />} exact={true} />
        <Route path="/tabbar/accordion" render={() => <AccordionTest />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabbar/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor"><path d="M232.32-192.32h123.61v-251.75h248.14v251.75h123.61v-371.71L480-749.7 232.32-563.9v371.58Zm-88.15 88.15V-608.1L480-860.16l336.2 252v503.99H522.9V-362.9h-85.8v258.73H144.17ZM480-471.25Z" /></svg>            <IonLabel className='ion-label-tab'>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="accounts" href="/tabbar/accounts">
          <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor"><path d="M193.49-248.91v-319.34h81.18v319.34h-81.18Zm248.87 0v-319.34h80.61v319.34h-80.61ZM64.17-108.61v-88.14H896.2v88.14H64.17Zm621.16-140.3v-319.34h81.18v319.34h-81.18ZM64.17-620.59v-88.19L480-935.17l416.2 226.39v88.19H64.17Zm188.99-88.53h453.68-453.68Zm0 0h453.68L480-834.68 253.16-709.12Z" /></svg>            <IonLabel className='ion-label-tab'>Accounts</IonLabel>
        </IonTabButton>

        <IonTabButton tab="deposits" href="/tabbar/video">
          <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor"><path d="M240.45-371.42h321.19l66.67-66.67H240.45v66.67Zm0-167.67h234v-66.66h-234v66.66Zm-88.13-155.56v414.13h318.42l-88.81 88.81H64.17v-591.46H896.2v166.27h-88.52v-77.75H152.32Zm777.52 209.98q8.39 8.39 8.39 20.29 0 11.9-8.39 19.92l-34.97 35.53-71.74-71.74 36.31-36.87q8.01-8.01 18.76-8.01 10.76 0 18.77 8.01l32.87 32.87ZM522.9-109.26V-181l273.01-272.64 71.93 71.74L595.2-109.26h-72.3ZM152.32-694.65v414.13-414.13Z" /></svg>            <IonLabel className='ion-label-tab'>Deposits</IonLabel>
        </IonTabButton>

        <IonTabButton tab="more" href="/tabbar/accordion">
          <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor"><path d="M204.12-414.36q-26.93 0-46.27-19.28-19.33-19.29-19.33-46.36 0-27.54 19.31-46.59 19.31-19.05 46.42-19.05 26.84 0 46.48 19.05 19.63 19.06 19.63 46.31 0 27.25-19.66 46.58-19.66 19.34-46.58 19.34Zm276.16 0q-27.25 0-46.58-19.28-19.34-19.29-19.34-46.36 0-27.54 19.28-46.59 19.29-19.05 46.36-19.05 27.54 0 46.59 19.05 19.05 19.06 19.05 46.31 0 27.25-19.05 46.58-19.06 19.34-46.31 19.34Zm275.53 0q-27.37 0-46.77-19.28-19.4-19.29-19.4-46.36 0-27.54 19.49-46.59 19.5-19.05 46.87-19.05 27.38 0 46.62 19.05 19.24 19.06 19.24 46.31 0 27.25-19.34 46.58-19.33 19.34-46.71 19.34Z" /></svg>
          <IonLabel className="ion-label-tab">More</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default TabBar;
