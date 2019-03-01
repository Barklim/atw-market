import React, { Component } from 'react'
//import UserContainer from '../containers/UserContainer' // изменили импорт
//import PageContainer from '../containers/PageContainer'
import FactoryContainer from '../containers/FactoryContainer/FactoryContainer'
//import MoneyBoxContainer from '../containers/MoneyBoxContainer' // изменили импорт

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <FactoryContainer />
      </div>
    )
  }
}

export default App
