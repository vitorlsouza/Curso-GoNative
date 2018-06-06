import React from 'react';
import { Provider } from 'react-redux';
import 'config/ReactotronConfig';
import Mapa from 'pages/Mapa';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Mapa />
  </Provider>
);

export default App;
