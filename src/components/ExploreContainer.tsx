import './ExploreContainer.css';
import React from 'react';
import { IonButton } from '@ionic/react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonButton expand="block">Block</IonButton>
      <IonButton expand="full">Full</IonButton>
    </>
  );
};

export default ExploreContainer;
