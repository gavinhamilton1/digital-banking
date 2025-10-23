// src/Login.tsx

import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { IonContent, IonList, IonItem, IonLabel, IonInput, IonIcon, IonToggle, IonButton, IonListHeader, IonInputPasswordToggle, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { lockClosed, eye, eyeOffOutline, eyeOutline, colorFill } from 'ionicons/icons';
import './Login.css';


const Login: React.FC = () => {

  return (
    <IonContent className='ion-content-login'>
      <IonGrid className='ion-grid-login'>
        <IonRow><IonCol><img src="JPMCLogo.png" width="120" height="31" alt="JPMC Logo" /></IonCol></IonRow>
        <IonRow><IonCol><IonLabel>Digital Commercial Bank</IonLabel></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>

        <IonRow><IonCol>
          <IonItem lines='none'>
            <IonInput labelPlacement="stacked" fill="outline" placeholder="Username" required></IonInput>
          </IonItem>
          <IonItem lines='none'>
            <IonInput labelPlacement="stacked" fill="outline" placeholder="Password" type="password" required>
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonItem>

          <IonItem lines='none' mode='ios'>
            <IonToggle justify="start" labelPlacement="end" className="stdpad">Remember Me</IonToggle>
          </IonItem>

          <IonButton expand="block" className='ion-text-capitalize' routerLink='/tabbar'>Sign in</IonButton>

        </IonCol></IonRow>
        <IonRow><IonCol></IonCol></IonRow>
        <IonRow><IonCol>
          <IonItem lines='none' className='forgot-password'>
            <IonLabel><a href="#forgot">Forgot Password</a></IonLabel>
          </IonItem>
        </IonCol></IonRow>
      </IonGrid>

    </IonContent>
  );
};

export default Login;
