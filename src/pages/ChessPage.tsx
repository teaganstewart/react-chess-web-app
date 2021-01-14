import React from 'react';
import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ChessPage.css';

const ChessPage: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen class="background">
    
        {/* <ExploreContainer name="Tab 1 page" /> */}

        <IonGrid class="chess-grid">
          <IonRow>
            <IonCol sizeMd="8" sizeLg="7" size = "12">
              <IonCard class="chess-card"> Hello </IonCard>
            </IonCol>

            <IonCol sizeMd="4" sizeLg="5" size = "12" >
              <IonCard class="options-card"> Helloo</IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ChessPage;
