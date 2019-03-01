import React from 'react'
import PropTypes from 'prop-types'
import './MoneyBox.css'

export class MoneyBox extends React.Component {

  onBtnClick = e => {
    const currentCount = this.props.moneyCount
    this.props.postCoin(currentCount) 
  }

  renderTemplate = () => {
    const { moneyCount, error, isFetching } = this.props
    var moneyTemplate;
    var moneyText;

    if ( moneyCount === 1) {
      moneyText = 'монета'
    } else  {
      if ( ( moneyCount > 1 ) && ( moneyCount <= 4 ) ) {
        moneyText = 'монеты'
      } else {
       moneyText = 'монет'
      }
    }


    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

     if (moneyCount > 0) {
      var moneyCountArray = [];
      for (var i = 0; i < moneyCount; i++) {
        moneyCountArray.push('');
      }
      moneyTemplate = moneyCountArray.map(function(item, index) {
        return (
          <div key={index}>
            <div className="moneyBox-coin">{item.moneyCountArray}</div>
          </div>
        )
      })
    } else {
      moneyTemplate = <p className="moneyBox-zero">К сожалению монет нет</p>
    }

     return (
       <div>
        <div className="moneyBox-moneyTemplate">{moneyTemplate}</div>
        <p className="moneyBox-sub">{moneyCount} {moneyText}</p>
        <div className="moneyBox-btn" onClick={this.onBtnClick}>
          Добавить одну монету
        </div>
      </div>
    )
  }
  render() {
    return <div className="moneyBox-container">{this.renderTemplate()}</div>
  }
}

MoneyBox.propTypes = {
  moneyCount: PropTypes.number.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  postCoin: PropTypes.func.isRequired,
}
