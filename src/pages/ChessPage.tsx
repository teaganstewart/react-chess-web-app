import React, { useEffect } from 'react';
import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ChessPage.css';
import BoardCanvas from '../components/BoardCanvas';

const ChessPage: React.FC = () => {

  const onComponentMount = () => { 

  }

  const GetWidth = () => { 
    useEffect(() => {
      console.log("hello");
    })
  
    
    return "625";
  }
  
  return (
    <IonPage>

      <IonContent fullscreen class="background">

        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonGrid class="chess-grid">
          <IonRow>
            <IonCol  sizeLg="8" size="12" sizeXl = "6">
              <IonCard class="chess-card">
               
                <BoardCanvas></BoardCanvas>
              </IonCard>

            </IonCol>

            <IonCol sizeLg="4" size="12" sizeXl = "6">
              <IonCard class="options-card"> Helloo</IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChessPage;
