import React from 'react';
import {Provider} from 'react-redux';
import {Main} from './screen/Main'
import {store} from './store/store';
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
