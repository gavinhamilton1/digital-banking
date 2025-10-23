import React, { useState } from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonAccordionGroup, IonAccordion, IonApp, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import './public.css';
import InfoCard from './InfoCard';
import ActionItems from './ActionItems';
import AccountsCard from './AccountsCard';
import MoneyMovementCard from './MoneyMovementCard';

const Dashboard: React.FC = () => {

  const handleClick = () => {
    console.log('Button clicked');
  };

  console.log('Dashboard component rendering');

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid className='ion-header' style={{paddingBottom: '0px'}}>
            <IonRow>
              <IonCol size="10" style={{ textAlign: 'left' }}><img src="JPMCLogo.png" width="120" height="31" alt="JPMC Logo" /></IonCol>
              <IonCol size="1"><img src="Alerts.svg" height="25"></img></IonCol>
              <IonCol size="1"><img src="Settings.svg" height="25"></img></IonCol>
            </IonRow>
            <IonRow><IonCol style={{ textAlign: 'left' }}><IonLabel>Welcome, Gavin</IonLabel></IonCol></IonRow>
            <IonRow><IonCol style={{ textAlign: 'left', fontSize: '10pt' }}
            >Your last login was August 28, 2024 9.12am ET</IonCol></IonRow>
            <IonRow><IonCol>
              <InfoCard type="info"
                title="Company profile setup is in progress"
                content="Access will be available after a system administrator completes company profile setup." />
              <InfoCard type="warn"
                title="Holiday hours reminder"
                content="Your local branch hours may be affected by the holiday." />
            </IonCol></IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-content-std' style={{backgroundColor: 'white', minHeight: '100vh'}}>
        <IonGrid>
        <IonRow><IonCol style={{paddingTop: '10px', backgroundColor: 'yellow', color: 'black'}}>
          <h1 style={{color: 'black', fontSize: '24px'}}>Dashboard Loading...</h1>
          </IonCol></IonRow>
          <IonRow><IonCol>
            <ActionItems />
          </IonCol></IonRow>
          <IonRow><IonCol style={{paddingBottom: '0px'}}>
            <AccountsCard />
          </IonCol></IonRow>
          <IonRow><IonCol>
            <MoneyMovementCard />
          </IonCol></IonRow>

        </IonGrid>
      </IonContent>
    </>
  );
};

export default Dashboard;
