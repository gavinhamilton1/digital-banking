import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { lockClosed, eye, eyeOffOutline, eyeOutline, colorFill } from 'ionicons/icons';
import './public.css';
import { Link } from 'react-router-dom';


const Public: React.FC = () => {

  return (
    <IonContent className='ion-content-public'>
      <br/><br/><br/>
      <IonGrid>
      <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol><img src="JPMCLogo.png" width="120" height="31" alt="JPMC Logo" /></IonCol></IonRow>
        <IonRow><IonCol><IonLabel>Digital Commercial Bank</IonLabel></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol>
        <br/><br/><br/>
        <ImageCarousel />
        </IonCol></IonRow>

        <IonRow><IonCol>
        <br/><br/><br/><br/><br/><br/>
          <IonButton expand="block" className='ion-text-capitalize' routerLink='/tabbar/dashboard'>Goto Dashboard</IonButton>

        </IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol>
        </IonCol></IonRow>
      </IonGrid>

    </IonContent>
  );
};

export default Public;
