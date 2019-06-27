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

  deleteCard = (CardId) => {
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

  generateRandomCard() {
    const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  addRandomCard = (ListId) => {
    const rC = this.generateRandomCard();
    const rCkey = rC.id;
    const newAllCards = 
    { 
      ...this.state.allCards, 
    }
    newAllCards[rCkey] = rC 

    if(rC.id in this.state.allCards) {
      this.setState({
        lists: this.state.lists.map((list) => {
          return ListId === list.id ? 
          {
            id: list.id,
            header: list.header,
            cardIds: [...list.cardIds, rC.id] 
          } : {
            id: list.id, 
            header: list.header, 
            cardIds: list.cardIds
          }
        })
      }) 
    } else{
      this.setState({
        lists: this.state.lists.map((list) => {
          return ListId === list.id ? 
          {
            id: list.id,
            header: list.header,
            cardIds: [...list.cardIds, rC.id] 
          } : {
            id: list.id, 
            header: list.header, 
            cardIds: list.cardIds
          }
        }),
        allCards: newAllCards
      })
    } 
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
