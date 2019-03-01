import React from 'react'
import { connect } from 'react-redux'
import { getPhotos, postCoin, buyArm, buyLeg, buyBody, sellArm, sellLeg, sellBody, toggleСolor, toggleGender, 
  toggleBar1, toggleBar2, toggleBar3, toggleBar4, toggleBar5, createHuman } from '../../actions/FactoryActions'
import { MoneyBox } from '../../components/MoneyBox.js'
import { Market } from '../../components/Market.js'
import { Bag } from '../../components/Bag.js'
import { Factory } from '../../components/Factory.js'
// Titles components
import { TitleMoneyBox } from '../../components/Title/TitleMoneyBox.js'
import { TitleMarket } from '../../components/Title/TitleMarket.js'
import { TitleBag } from '../../components/Title/TitleBag.js'
import { TitleProduction } from '../../components/Title/TitleProduction.js'

class FactoryContainer extends React.Component {
  render() {
    const { factory, postCoin, buyArm, buyLeg, buyBody, sellArm, sellLeg, sellBody, toggleGender, toggleСolor,
    toggleBar1, toggleBar2, toggleBar3, toggleBar4, toggleBar5, createHuman } = this.props
    return (
      <div className='factory'>
        <div className='app-title'>
          «Фабрика человечков»
        </div>
        <TitleMoneyBox />
        <MoneyBox
          moneyCount={factory.moneyCount}
          isFetching={factory.isFetching}
          postCoin={postCoin}
        />
        <TitleMarket />
        <Market
          moneyCount={factory.moneyCount}
          arm={factory.arm}
          leg={factory.leg}
          body={factory.body}
          buyArm={buyArm}
          buyLeg={buyLeg}
          buyBody={buyBody}
        />
        <TitleBag />
        <Bag
          moneyCount={factory.moneyCount}
          arm={factory.arm}
          leg={factory.leg}
          body={factory.body}
          sellArm={sellArm}
          sellLeg={sellLeg}
          sellBody={sellBody}
        />
        <TitleProduction />
        <Factory
          moneyCount={factory.moneyCount}
          human={factory.human}
          isFetching={factory.isFetching}
          error={factory.error}
          gender={factory.gender}
          color={factory.color}
          toggleСolor={toggleСolor}
          toggleGender={toggleGender}
          bar_1={factory.bar_1}
          bar_2={factory.bar_2}
          bar_3={factory.bar_3}
          bar_4={factory.bar_4}
          bar_5={factory.bar_5}
          toggleBar1={toggleBar1}
          toggleBar2={toggleBar2}
          toggleBar3={toggleBar3}
          toggleBar4={toggleBar4}
          toggleBar5={toggleBar5}
          arm={factory.arm}
          leg={factory.leg}
          body={factory.body}
          createHuman={createHuman}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    factory: store.factory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postCoin: moneyCount => dispatch(postCoin(moneyCount)),
    getPhotos: year => dispatch(getPhotos(year)),
    buyArm: (moneyCount, arm) => dispatch(buyArm(moneyCount, arm)),
    buyLeg: (moneyCount, leg) => dispatch(buyLeg(moneyCount, leg)),
    buyBody: (moneyCount, body) => dispatch(buyBody(moneyCount, body)),
    sellArm: (moneyCount, arm) => dispatch(sellArm(moneyCount, arm)),
    sellLeg: (moneyCount, leg) => dispatch(sellLeg(moneyCount, leg)),
    sellBody: (moneyCount, body) => dispatch(sellBody(moneyCount, body)),
    toggleGender: gender => dispatch(toggleGender(gender)),
    toggleСolor: color => dispatch(toggleСolor(color)),
    toggleBar1: (bar_1, arm) => dispatch(toggleBar1(bar_1, arm)),
    toggleBar2: (bar_2, arm) => dispatch(toggleBar2(bar_2, arm)),
    toggleBar3: (bar_3, leg) => dispatch(toggleBar3(bar_3, leg)),
    toggleBar4: (bar_4, leg) => dispatch(toggleBar4(bar_4, leg)),
    toggleBar5: (bar_5, body) => dispatch(toggleBar5(bar_5, body)),
    createHuman: (human ,gender, color, bar_1, bar_2, bar_3, bar_4, bar_5) => dispatch(createHuman(human, gender, color, bar_1, bar_2, bar_3, bar_4, bar_5))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FactoryContainer)
