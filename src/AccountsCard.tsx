import React, { useState } from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonAccordionGroup, IonAccordion, IonApp } from '@ionic/react';
import './InfoCard.css';
import './public.css';
import TabBar from './TabBar';
import { informationCircle, close, closeCircle, closeCircleOutline, warning, alertCircle, informationCircleOutline } from 'ionicons/icons';

const handleInfoClick = () => {
  console.log('Button clicked');
};

const AccountsCard: React.FC = () => {

  console.log('AccountsCard component rendering');

  return (
    <IonCard className={'ion-card-std'}>
      <IonCardHeader className={'ion-card-std-header'}>
        <IonItem lines="none" className='ion-card-std-header-item'>
          <span className='action-items-icon'>
          
<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path fill="currentColor" d="M193.49-248.91v-319.34h81.18v319.34h-81.18Zm248.87 0v-319.34h80.61v319.34h-80.61ZM64.17-108.61v-88.14H896.2v88.14H64.17Zm621.16-140.3v-319.34h81.18v319.34h-81.18ZM64.17-620.59v-88.19L480-935.17l416.2 226.39v88.19H64.17Zm188.99-88.53h453.68-453.68Zm0 0h453.68L480-834.68 253.16-709.12Z"/></svg>

          </span>
          <IonLabel>Accounts</IonLabel>
        </IonItem>
      </IonCardHeader>
      <IonCardContent className='ion-card-std-content'>
        <div>
          <span className='ion-card-std-content-subhead'>TOTAL AVAILABLE BALANCES</span>
          <span className='ion-card-std-content-info-icon'>
            <IonIcon icon={informationCircleOutline} onClick={handleInfoClick}></IonIcon>
          </span>
        </div>
        <div className='ion-card-std-content-balance'>
          <span className='ion-card-std-content-balance-amount'>82,847,189.44</span>
          <span className='ion-card-std-content-balance-currency'>USD</span>
        </div>
        <div className='ion-card-std-content-accounts'>
          <IonGrid className='ion-card-std-content-accounts-grid'>
            <IonRow>
              <IonCol className='ion-card-std-content-accounts-count'>Deposit Accounts 22</IonCol>
              <IonCol className='ion-card-std-content-accounts-value'>82,847,189.44 USD</IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="view-accounts"><a href="#viewaccounts">View Accounts</a></div>
      </IonCardContent>

    </IonCard>
  );

};


export default AccountsCard;
