import React, { useState } from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonAccordionGroup, IonAccordion, IonApp } from '@ionic/react';
import { BarChart } from '@mui/x-charts/BarChart';
import './InfoCard.css';
import './public.css';
import TabBar from './TabBar';
import { informationCircle, close, closeCircle, closeCircleOutline, warning, alertCircle, informationCircleOutline } from 'ionicons/icons';

const handleInfoClick = () => {
  console.log('Button clicked');
};

const MoneyMovementCard: React.FC = () => {

  return (
    <IonCard className={'ion-card-std'}>
      <IonCardHeader className={'ion-card-std-header'}>
        <IonItem lines="none" className='ion-card-std-header-item'>
          <span className='action-items-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="20px"><path fill="currentColor" d="M109.26-109.26v-92.41l86.07-86.07v178.48h-86.07Zm163.9 0v-252.97l86.26-86.26v339.23h-86.26Zm164.09 0v-339.23l86.07 86.5v252.73h-86.07Zm163.89 0v-253.86l86.08-85.69v339.55h-86.08Zm163.9 0v-414.86l85.7-85.69v500.55h-85.7ZM109.26-323.72v-125.05L400-738.17l160 160 290.74-291.41v124.67L560-453.13l-160-160-290.74 289.41Z"/></svg>
          </span>
          <IonLabel>Money Movement</IonLabel>
        </IonItem>
      </IonCardHeader>
      <IonCardContent className='ion-card-std-content'>
        <div>
          <span className='ion-card-std-content-subhead'>Money Moved</span>
          <span className='ion-card-std-content-info-icon'>
            <IonIcon icon={informationCircleOutline} onClick={handleInfoClick}></IonIcon>
          </span>
        </div>
        <div className='ion-card-std-content-accounts'>
        <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
        </div>
        <div className="view-accounts"><a href="#viewaccounts">View Transactions</a></div>
      </IonCardContent>

    </IonCard>
  );

};


export default MoneyMovementCard;
