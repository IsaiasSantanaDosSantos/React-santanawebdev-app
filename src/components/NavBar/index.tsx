import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './styled.css';

function Example() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Logo tipo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Links do menu</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Logo</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
}
export default Example;