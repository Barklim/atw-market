import React from 'react'
import PropTypes from 'prop-types'
import './Bag.css'

export class Bag extends React.Component {

  onBtnClickArm = e => {
    const currentCount = this.props.moneyCount
    const currentArm = this.props.arm
    this.props.sellArm(currentCount, currentArm) // setYear -> getPhotos
  }

  onBtnClickLeg = e => {
    const currentCount = this.props.moneyCount
    const currentLeg = this.props.leg
    this.props.sellLeg(currentCount, currentLeg) // setYear -> getPhotos
  }

  onBtnClickBody = e => {
    const currentCount = this.props.moneyCount
    const currentBody = this.props.body
    this.props.sellBody(currentCount, currentBody) // setYear -> getPhotos
  }

  renderTemplate = () => {
    const { error, isFetching, arm, leg, body } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

     return (
       <div className="cardsBag">
        <span className="cardBag">
          <span className={arm > 0 ? 'card-header':'card-header-opacity'}>
            <div className="card-fix-arm">
            </div>
            <div className="card-postscript-sign-left">✖</div>
            <span className="card-postscript-left"> {arm}</span> 
          </span>
          <span className={arm> 0 ? 'card-body':'card-body-opacity'}>
            <button className="btn-red" onClick={this.onBtnClickArm} disabled={ arm > 0 ? false : true }>
              Продать одну
            </button>
            <span className="card-sub">
             за 3 монеты
            </span>
          </span>
        </span>

        <span className="cardBag">
          <span className={leg > 0 ? 'card-header':'card-header-opacity'}>
            <div className="card-fix-leg">
            </div>
            <div className="card-postscript-sign">✖</div>
            <span className="card-postscript"> {leg}</span>
          </span>
          <span className={leg > 0 ? 'card-body':'card-body-opacity'}>
            <button className="btn-red" onClick={this.onBtnClickLeg} disabled={ leg > 0 ? false : true }>
              Продать одну
            </button>
            <span className="card-sub">
              за 5 монет
            </span>
          </span>
        </span>

        <span className="cardBag">
          <span className={body > 0 ? 'card-header':'card-header-opacity'}>
            <div className="card-fix-gherkin">
            </div>
            <div className="card-postscript-sign-right">✖</div>
            <span className="card-postscript-right"> {body}</span>
          </span>
          <span className={body > 0 ? 'card-body':'card-body-opacity'}>
            <button className="btn-red" onClick={this.onBtnClickBody} disabled={ body > 0 ? false : true }>
              Продать один
            </button>
            <span className="card-sub">
              за 15 монет
            </span>
          </span>
        </span>
      </div>
    )
  }
  render() {
    return <div className="bag-container">{this.renderTemplate()}</div>
  }
}

Bag.propTypes = {
  moneyCount: PropTypes.number.isRequired,
  error: PropTypes.string,
  sellArm: PropTypes.func.isRequired,
  sellLeg: PropTypes.func.isRequired,
  sellBody: PropTypes.func.isRequired,
}

