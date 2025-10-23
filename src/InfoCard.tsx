import React, { useState } from 'react';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonAccordionGroup, IonAccordion, IonApp } from '@ionic/react';
import './InfoCard.css';
import TabBar from './TabBar';
import { informationCircle, close, closeCircle, closeCircleOutline, warning, alertCircle } from 'ionicons/icons';

interface InfoCardProps {
  title: string;
  content: string;
  type?: 'info' | 'warn' | 'error';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, type = "info" }) => {

  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) {
    return null; // Don't render the card if it's not visible
  }
  
  const handleClose = () => {
    console.log('GOT HERE');
    setIsVisible(false);
  };

  
  const getIcon = () => {
    switch (type) {
      case 'info':
        return informationCircle;
      case 'warn':
        return warning;
      case 'error':
        return alertCircle;
      default:
        return informationCircle;
    }
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

return (
    <IonCard color="primary" className={'ion-card-alert ion-card-alert-' + type}>
      <IonGrid>
        <IonRow><IonCol size="1" className='ion-card-alert-icon-col'>
          <IonCardTitle className='ion-card-alert-title'>
            <span className={'ion-card-alert-title ion-card-alert-title-' + type}><IonIcon icon={getIcon()} className='ion-card-alert-icon'></IonIcon></span>
          </IonCardTitle>
        </IonCol>
          <IonCol size="10" >
            <IonCardHeader>
              <IonCardTitle className={'ion-card-alert-title ion-card-alert-title-' + type}>
                <span className={'ion-card-alert-title ion-card-alert-title-' + type}>{title}</span>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='ion-card-alert-content'>{content}</IonCardContent>
          </IonCol>
          <IonCol size="1" className='ion-card-alert-icon-col-close'>
            <span className={'ion-card-alert-title ion-card-alert-title-' + type}><IonIcon icon={closeCircleOutline} className='ion-card-alert-icon' onClick={handleClose}></IonIcon></span>
          </IonCol></IonRow>
      </IonGrid>
    </IonCard>
  );

};


export default InfoCard;
