import React, { Component } from 'react';
import TodoList from '../src/components/to-do-list/to-do-list';
import AddList from '../src/components/add-list/add-list';
import Search from "../src/components/search/search";
import './App.css';

export default class App extends Component {
  state = {
    listAddingValue: '',
    list: [
      {content: 'Get married', id:1, important: false, done: false},
      {content: 'to be or not to be', id:2, important: true, done: true},
      {content: 'go up', id:3, important: false, done: true},
      {content: 'bye car', id:4, important: true, done: false},
      {content: 'drink some coffee ', id:5, important: false, done: false}
    ],
    search: ''
  }

  listValue = (e) => {
    this.setState({
      listAddingValue: e.target.value
    })
  }

  maxid = 100;

  listSubmit = (e) => {
    e.preventDefault();
    if(this.state.listAddingValue.length < 30 && this.state.listAddingValue.length > 0) {
      this.setState(({ listAddingValue }) => {
        const newList = {
          content: listAddingValue,
          id: this.maxid++,
          important:false,
          done: false
        };
        const newArr = [...this.state.list,newList];

        return {
          listAddingValue: '',
          list: newArr
        }
      })
    } else if (this.state.listAddingValue.length > 30) {
      alert('max length 30 symbols');
    } else if(this.state.listAddingValue.length <= 0) {
      alert('type please anything');
    }
  }

  listDelete = (id) => {
    this.setState(({ list }) => {
      const idx = list.findIndex((el) => el.id === id);
      const before = list.slice(0, idx);
      const after = list.slice(idx + 1);
      const newArr = [...before, ...after];

      return {
        list: newArr
      }
    })
  }

  toggleBool = (list, id, boolProperty) => {
      const idx = list.findIndex((el) => el.id === id);
      const oldItem = list[idx];
      const newValue = !oldItem[boolProperty];
      const newItem = { ...oldItem, [boolProperty]: newValue };
      const before = list.slice(0, idx);
      const after = list.slice(idx + 1);
      return [...before, newItem, ...after];
  }

  listImportant = (id) => {
    this.setState(({list})=>{
      const items = this.toggleBool(list , id, 'important');
      return { list: items }
    });
  }

  listDone = (id) => {
    this.setState(({list})=>{
      const items = this.toggleBool(list , id, 'done');
      return { list: items }
    });
  }

  listSearchValue = (e) => {
    this.setState({
      search:  e.target.value
    })
  }

  listSearch = (list, search) => {
    if( search.length === 0){
      return list
    }

    return list.filter((item) => {
      return item.content.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render(){
    const { listValue, listSubmit, listDelete, listImportant, listDone, listSearchValue, listSearch } = this;
    const { list, listAddingValue, search } = this.state;
    const doneCount = list.filter(el => el.done).length
    const visibleLists = listSearch(list,search);
    return (
      <div className="App">
        <Search listSearchValue={listSearchValue} count={list.length} doneCount={doneCount}/>
        <TodoList list={visibleLists} listDelete={listDelete} listImportant={listImportant} listDone={listDone}/>
        <AddList listValue={listValue} listSubmit={listSubmit} listAddingValue={listAddingValue}/>
      </div>
    );
  }
}
