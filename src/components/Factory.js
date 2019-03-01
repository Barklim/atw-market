import React from 'react'
import PropTypes from 'prop-types'
import './Factory.css'

export class Factory extends React.Component {

  onBtnClick = e => {
    const currentGender = this.props.gender
    this.props.toggleGender(currentGender) 
  }

  onBtnClickColor = e => {
    const currentColor = this.props.color
    this.props.toggleСolor(currentColor) 
  }

  onBtnClickBar1 = e => {
    const currentTab1 = this.props.bar_1
    const currentArm = this.props.arm
    this.props.toggleBar1(currentTab1, currentArm) 
  }

  onBtnClickBar2 = e => {
    const currentTab2 = this.props.bar_2
    const currentArm = this.props.arm
    this.props.toggleBar2(currentTab2, currentArm) 
  }

  onBtnClickBar3 = e => {
    const currentTab3 = this.props.bar_3
    const currentLeg = this.props.leg
    this.props.toggleBar3(currentTab3, currentLeg) 
  }

  onBtnClickBar4 = e => {
    const currentTab4 = this.props.bar_4
    const currentLeg = this.props.leg
    this.props.toggleBar4(currentTab4, currentLeg) 
  }

  onBtnClickBar5 = e => {
    const currentTab5 = this.props.bar_5
    const currentBody = this.props.body
    this.props.toggleBar5(currentTab5, currentBody)
  }

  onBtnClickCreate = e => {
    const currentGender = this.props.gender
    const currentColor = this.props.color
    const currentHuman = this.props.human
    const curBar_1 = this.props.bar_1
    const curBar_2 = this.props.bar_2
    const curBar_3 = this.props.bar_3
    const curBar_4 = this.props.bar_4
    const curBar_5 = this.props.bar_5
    this.props.createHuman(currentHuman, currentColor, currentGender, curBar_1, curBar_2, curBar_3, curBar_4, curBar_5)
  }

  renderTemplate = () => {
    const { moneyCount, error, isFetching, gender, color, arm, leg, body,
    bar_1, bar_2, bar_3, bar_4, bar_5 } = this.props
    let armText;
    let legText;
    let gherkinText;
    let moneyText;

    // Бл0к для п0дсказки t00ltip

    if ( ( bar_1 === true && bar_2 === false ) || ( bar_1 === false && bar_2 === true )  ) {
        armText = 'ручки'
      } else  {
      if ( bar_1 === false && bar_2 === false  ) {
        armText = 'двух ручек'
        } else {
       armText = ''
      }
    }

    if ( ( bar_3 === true && bar_4 === false ) || ( bar_3 === false && bar_4 === true )  ) {
        legText = 'ножки'
      } else  {
      if ( bar_3 === false && bar_4 === false  ) {
        legText = 'двух ножек'
      } else {
        legText = ''
      }
    }

    if ( bar_5 === true  ) {
        gherkinText = ''
      } else  {
       gherkinText = 'огуречика'
      }

    if ( moneyCount >= 10  ) {
        moneyText = ''
      } else  {
        moneyText = 'денег'
      }

    var initArr = [ armText, legText ,gherkinText , moneyText ]
    var formatArr = initArr.filter(function(number) {
      return number !== '';
    });

  function doubled (formatArr) {
    var doubledArr = [];
    for (var i = 0; i < formatArr.length; i++) {
        doubledArr.push(formatArr[i] );
        doubledArr.push(',' );
    }
    return doubledArr;
}

var doubledArr = doubled(formatArr);

    doubledArr[doubledArr.length - 1] = '.'
    doubledArr[doubledArr.length - 3] = ' и '
    // д0бавидь д0чку и начал0
    var jointTip = doubledArr.join('');

/*    console.log('initArr');
    console.log(initArr);
    console.log('formatArr');
    console.log(formatArr);
    console.log('doubledArr');
    console.log(doubledArr);
    console.log('jointTip');
    console.log(jointTip);*/

    let tipTemplate;

    if ( bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true && moneyCount >= 10 ) {

      tipTemplate = <div> У вас все есть! </div>   

    } else {

      tipTemplate = <div> Не хватает { jointTip } </div>
    }

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

     return (
       <div className="cardsProduction">

        <span className="cardProductionLeft">
         
          <div className="card-LeftBar">
            <span className="card-LeftBar-top">
              <span className="gender">
                Пол: 
              </span>
              <button className={'btn-bar ' + (gender ? 'btn-bar-active': '')} onClick={this.onBtnClick}>
                мужчина
              </button>
              <button className={'btn-bar ' + (gender ? '': 'btn-bar-active')} onClick={this.onBtnClick}>
                женщина
              </button>
            </span>
  
            <span className="card-LeftBar-bottom">
              <span className="color">
                Цвет: 
              </span>
              <button className={'btn-bar ' + (color ? 'btn-bar-active': '')} onClick={this.onBtnClickColor}>
                белый
              </button>
              <button className={'btn-bar ' + (color ? '': 'btn-bar-active')} onClick={this.onBtnClickColor}>
                чёрный
              </button>
            </span>
          </div>

          <div className="card-LeftChoose">
            <div className={bar_1 === true ? 'bar-kotel1':''}>
              <button     
                className={arm > 0 ? 'bar-clickable1':'bar-1'}
                onClick={this.onBtnClickBar1} 
                disabled={ arm > 0 || bar_1 === true ? false : true }
              />
            </div>
            <div className={bar_2 === true ? 'bar-kotel2':''}>
              <button     
                className={arm > 0 ? 'bar-clickable2':'bar-2'}
                onClick={this.onBtnClickBar2} 
                disabled={ arm > 0 || bar_2 === true ? false : true }
              />
            </div>
            <div className={bar_3 === true ? 'bar-kotel3':''}>
              <button     
                className={leg > 0 ? 'bar-clickable3':'bar-3'}
                onClick={this.onBtnClickBar3} 
                disabled={ leg > 0 || bar_3 === true ? false : true }
              />
            </div>
            <div className={bar_4 === true ? 'bar-kotel4':''}>
              <button     
                className={leg > 0 ? 'bar-clickable4':'bar-4'}
                onClick={this.onBtnClickBar4} 
                disabled={ leg > 0 || bar_4 === true ? false : true }
              />
            </div>
            <div className={bar_5 === true ? 'bar-kotel5':''}>
              <button     
                className={body > 0 ? 'bar-clickable5':'bar-5'}
                onClick={this.onBtnClickBar5} 
                disabled={ body > 0 || bar_5 === true ? false : true }
              />
            </div>
            
          </div>

        </span>

        <span className="cardProductionArrow">
          →
        </span>

        <span className="cardProductionCenter">

          <div className="tooltip">
            <div className="tooltiptext">

              { tipTemplate }

            </div>
          </div>
          <div className="production-kotel"></div>
          <div className={ bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true && moneyCount >= 10 ? "" : "production-opacity" }>
            <button 
              className="btn-green" 
              onClick={this.onBtnClickCreate}
              disabled={ bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true && moneyCount >= 10 ? false : true }
            >
              Сделать человечка
            </button>
            <span className="card-sub">
              за 10 монет
            </span>
            </div>
        </span>

        <span className="cardProductionArrow">
          →
        </span>

        <span className="cardProductionRight">
         <div className="production-маn" onClick={this.props.handleLogin}>
            <div className={ (  bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) && (( gender === true ) && ( color === true)  ) ? 'male-white' : '' }>
              <div className={ ( bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) && (( gender === true )  && ( color === false) ) ? 'male-black' : '' }>
                <div className={ (  bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) && (( gender === false )  && ( color === true) ) ? 'female-white' : '' }>
                  <div className={ (  bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) && (( gender === false )  && ( color === false) ) ? 'female-black' : '' }>
                    <div className={ ( bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) || ( gender === true ) ? '' : 'female-default' }>
                      <div className={ ( bar_1 === true && bar_2 === true && bar_3 === true && bar_4 === true && bar_5 === true ) || ( gender === false )  ? '' : 'male-default' }>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
        </span>

      </div>
    )
  }
  render() {
    return <div className="production-container">{this.renderTemplate()}</div>
  }
}

Factory.propTypes = {
  moneyCount: PropTypes.number.isRequired,
  error: PropTypes.string,
  toggleСolor: PropTypes.func.isRequired,
  toggleGender: PropTypes.func.isRequired,
}
