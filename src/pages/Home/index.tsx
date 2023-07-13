import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle,  IonPage } from '@ionic/react';
import NavBar from '../../components/NavBar'
import './styled.css';

const Home: React.FC = () => {
  return (
    <IonPage >
      <NavBar/>
      <IonContent fullscreen >
        <div className='homeContainer'>
         <h1>Home Page Original</h1>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
