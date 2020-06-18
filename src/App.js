import React from 'react';
import './App.scss';
import PizzaList from './components/PizzaList';
import PizzaProvider from './store/PizzaContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
      </header>
      <main>
        <PizzaProvider>
          <PizzaList />
        </PizzaProvider>
      </main>

    </div>
  );
}

export default App;
