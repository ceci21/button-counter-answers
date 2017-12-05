import React from 'react';

// Components
import Button from './components/Button';
import Counter from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Button />
      </div>
    );
  }
}

export default App;
