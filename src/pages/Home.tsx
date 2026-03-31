import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';
import { IonButton } from '@ionic/react';
const Home: React.FC = () => {
  return (
     <>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>
    </>
  );
};


export default Home;
