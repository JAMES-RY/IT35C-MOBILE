import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Feed: React.FC = () => {

    const games =[
{name :"Pokémon Yellow"},
{name :"Mega Man X"},
{name :"The Legend of Zelda"},
{name :"Pac-Man"},
{name :"Super Mario World"}

    ]
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Feed</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Feed</h1>

             <IonList>
                {games.map((item, index) => (
                    <IonItem key={index}>
                        <IonLabel>{item.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
  
        </IonContent>
    </IonPage>
  )
};

export default Feed;