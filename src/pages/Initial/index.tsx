import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import './styled.css';
import AnimationLogo from '../../components/AnimationLogo';

const Home: React.FC = () => {
  return (
    <IonPage >
      <IonContent fullscreen >
        <div className='initialContainer'>
         <AnimationLogo/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
