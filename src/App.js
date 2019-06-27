import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state=props;
    console.log(this.state);
  }

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  deleteCard = (CardId, ListId) => {
    console.log('deleteCard')
    console.log('card: ', CardId, ' list: ', ListId)
  };

  addRandomCard = (ListId) => {
    console.log(ListId)
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
              deleteCard={this.deleteCard}
              ListId={list.id}
              addRandomCard={this.addRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
