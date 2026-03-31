import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './pages/Home';
import Login from './pages/login';
import Menu from './pages/Menu';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Template from './pages/Template';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* Login first */}
        <Route exact path="/login">
          <Login />
        </Route>

        {/* Home */}
        <Route exact path="/home">
          <Home />
        </Route>

        {/* Menu */}
        <Route exact path="/menu">
          <Menu />
        </Route>

        {/* Pages */}
        <Route exact path="/page1">
          <Page1 />
        </Route>

        <Route exact path="/page2">
          <Page2 />
        </Route>

        {/* Template */}
        <Route exact path="/template">
          <Template />
        </Route>

        {/* Default route */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;