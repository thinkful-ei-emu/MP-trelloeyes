import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state=props;
    console.log(this.state);
  }

  addCard = (id, listIndex)= {};

  deleteCard = (id, listIndex) => {console.log(asda)};


  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };


  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
