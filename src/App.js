import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state=props.store;
    console.log(this.state);
  }

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  deleteCard = (CardId, ListId) => {
  const aC = {...this.state.allCards}
  delete aC[CardId];
  console.log(aC);
    this.setState({
      lists:this.state.lists.map((list)=>{
        return{
          id:list.id,
          header:list.header,
          cardIds:list.cardIds.filter((item)=>item!==CardId)
        }
      }),
      allCards: aC,

    })
  };

  addRandomCard = (ListId) => {
    console.log(ListId)
  };

  render() {
    console.log(this.state);
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            
            <List
              {...console.log(list)}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
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
