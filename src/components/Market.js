import React from 'react'
import PropTypes from 'prop-types'
import './Market.css'

export class Market extends React.Component {

  onBtnClickArm = e => {
    const currentCount = this.props.moneyCount
    const currentArm = this.props.arm
    this.props.buyArm(currentCount, currentArm) // setYear -> getPhotos
  }

  onBtnClickLeg = e => {
    const currentCount = this.props.moneyCount
    const currentLeg = this.props.leg
    this.props.buyLeg(currentCount, currentLeg) // setYear -> getPhotos
  }

  onBtnClickBody = e => {
    const currentCount = this.props.moneyCount
    const currentBody = this.props.body
    this.props.buyBody(currentCount, currentBody) // setYear -> getPhotos
  }

  renderTemplate = () => {
    const { error, isFetching, moneyCount } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

     return (
       <div className="cardsIngredient">
        <div className={ moneyCount >= 5 ? 'cardIngredient':'cardIngredient-opacity'}>
          <button className="btn-green" onClick={this.onBtnClickArm} disabled={ moneyCount >= 5 ? false : true }>
            Купить ручку
          </button>
          <div className={ moneyCount >= 5 ? 'card-sub':'card-sub-opacity'}>
            за 5 монет
          </div>
        </div>

        <div className={ moneyCount >= 7 ? 'cardIngredient':'cardIngredient-opacity'}>
          <button className="btn-green" onClick={this.onBtnClickLeg} disabled={ moneyCount >= 7 ? false : true }>
            Купить ножку
          </button>
          <div className={ moneyCount >= 7 ? 'card-sub':'card-sub-opacity'}>
            за 7 монет
          </div>
        </div>
        
        <div className={ moneyCount >= 20 ? 'cardIngredient':'cardIngredient-opacity'}>
          <button className="btn-green" onClick={this.onBtnClickBody} disabled={ moneyCount >= 20 ? false : true }>
            Купить огуречик
          </button>
          <div className={ moneyCount >= 20 ? 'card-sub':'card-sub-opacity'}>
            за 20 монет
          </div>
        </div>
      </div>
    )
  }
  render() {
    return <div className="market-container">{this.renderTemplate()}</div>
  }
}

Market.propTypes = {
  moneyCount: PropTypes.number.isRequired,
  error: PropTypes.string,
  buyArm: PropTypes.func.isRequired,
  buyLeg: PropTypes.func.isRequired,
  buyBody: PropTypes.func.isRequired,
}

