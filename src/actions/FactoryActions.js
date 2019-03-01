export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'

export const GET_MONEY_REQUEST = 'GET_MONEY_REQUEST'
export const GET_MONEY_SUCCESS = 'GET_MONEY_SUCCESS'
export const GET_MONEY_FAIL = 'GET_MONEY_FAIL'

export const POST_MONEY_REQUEST = 'POST_MONEY_REQUEST'
export const DELETE_COIN_REQUEST = 'DELETE_COIN_REQUEST'
export const POST_MONEY_FAIL = 'POST_MONEY_FAIL'

export const POST_ARM_REQUEST = 'POST_ARM_REQUEST'
export const POST_ARM_FAIL = 'POST_ARM_FAIL'
export const DELETE_ARM_REQUEST = 'DELETE_ARM_REQUEST'
export const POST_LEG_REQUEST = 'POST_LEG_REQUEST'
export const POST_LEG_FAIL = 'POST_LEG_FAIL'
export const DELETE_LEG_REQUEST = 'DELETE_LEG_REQUEST'
export const POST_BODY_REQUEST = 'POST_BODY_REQUEST'
export const POST_BODY_FAIL = 'POST_BODY_FAIL'
export const DELETE_BODY_REQUEST = 'DELETE_BODY_REQUEST'

export const TOGGLE_GENDER = 'TOGGLE_GENDER'
export const TOGGLE_COLOR = 'TOGGLE_COLOR'

export const TOGGLE_BAR1 = 'TOGGLE_BAR1'
export const TOGGLE_BAR2 = 'TOGGLE_BAR2'
export const TOGGLE_BAR3 = 'TOGGLE_BAR3'
export const TOGGLE_BAR4 = 'TOGGLE_BAR4'
export const TOGGLE_BAR5 = 'TOGGLE_BAR5'

export const CREATE_MAN = 'CREATE_MAN'
export const CREATE_MAN_FAIL = 'CREATE_MAN_FAIL'
  
let photosArr = []
let cached = false

export function postCoin(moneyCount) {
  if  (moneyCount < 100 ) {
    moneyCount = moneyCount + 1;
    return {
      type: 'POST_MONEY_REQUEST',
      payload: moneyCount,
    }
  } else {

    return {
      type: 'POST_MONEY_FAIL',
      error: true,
      payload: new Error('Ошибка 0ДПРАВКИ'),
    }
  }
}


export function createHuman(human, color, gender, bar_1, bar_2, bar_3, bar_4, bar_5) {
  return dispatch => {

    if  ( true ) {
      
    bar_1 = false 
    bar_2 = false
    bar_3 = false 
    bar_4 = false
    bar_5 = false
    human = { gender: gender , color: color };

      dispatch({
        type: CREATE_MAN,
        payload: human
      })

      dispatch({
        type: TOGGLE_BAR1,
        payload: bar_1
      })

      dispatch({
        type: TOGGLE_BAR2,
        payload: bar_2
      })

      dispatch({
        type: TOGGLE_BAR3,
        payload: bar_3
      })

      dispatch({
        type: TOGGLE_BAR4,
        payload: bar_4
      })

      dispatch({
        type: TOGGLE_BAR5,
        payload: bar_5
      })


    } else {  

      dispatch({
        type: CREATE_MAN_FAIL,
        error: true,
        payload: new Error('Ошибка c0здания'),
      })

    }
  } 
}


// ---------- BUY ----------

export function buyArm(moneyCount, arm) {
  return dispatch => {
    if ( moneyCount >= 5) {
      moneyCount = moneyCount - 5;
      dispatch({
        type: DELETE_COIN_REQUEST,
        payload: moneyCount,
      })

      arm = arm + 1;
      dispatch({
        type: POST_ARM_REQUEST,
        payload: arm,
      })
    } else {
      dispatch({
          type: POST_ARM_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки'),
        })
    }

  } 
}

export function buyLeg(moneyCount, leg) {
  return dispatch => {
    if ( moneyCount >= 7 ) {
      moneyCount = moneyCount - 7;
      dispatch({
        type: DELETE_COIN_REQUEST,
        payload: moneyCount,
      })

      leg = leg + 1;
      dispatch({
        type: POST_LEG_REQUEST,
        payload: leg,
      })
    } else {
      dispatch({
          type: POST_LEG_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки'),
        })
    }

    } 
}

export function buyBody(moneyCount, body) {
  return dispatch => {
    if ( moneyCount >= 20 ) {
      moneyCount = moneyCount - 20;
      dispatch({
        type: DELETE_COIN_REQUEST,
        payload: moneyCount,
      })

      body = body + 1;
      dispatch({
        type: POST_BODY_REQUEST,
        payload: body,
      })
    } else {
      dispatch({
          type: POST_BODY_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки'),
        })
    }

    } 
}

// ---------- SELL ----------

export function sellArm(moneyCount, arm) {
  return dispatch => {
    if ( arm >= 1 && moneyCount <= 97) {
      moneyCount = moneyCount + 3;
      dispatch({
        type: POST_MONEY_REQUEST,
        payload: moneyCount,
      })

      arm = arm - 1;
      dispatch({
        type: DELETE_ARM_REQUEST,
        payload: arm,
      })
    } else {
      dispatch({
          type: POST_ARM_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки, превышен лимид к0шелька или не хвадаед денех'),
        })
    }

    } 
}

export function sellLeg(moneyCount, leg) {
  return dispatch => {
    if ( leg >= 1 && moneyCount <= 95 ) {
      moneyCount = moneyCount + 5;
      dispatch({
        type: POST_MONEY_REQUEST,
        payload: moneyCount,
      })

      leg = leg - 1;
      dispatch({
        type: DELETE_LEG_REQUEST,
        payload: leg,
      })
    } else {
      dispatch({
          type: POST_LEG_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки'),
        })
    }

  } 
}

export function sellBody(moneyCount, body) {
  return dispatch => {
    if ( body >= 1 && moneyCount <= 85 ) {
      moneyCount = moneyCount + 15;
      dispatch({
        type: POST_MONEY_REQUEST,
        payload: moneyCount,
      })

      body = body - 1;
      dispatch({
        type: DELETE_BODY_REQUEST,
        payload: body,
      })
    } else {
      dispatch({
          type: POST_BODY_FAIL,
          error: true,
          payload: new Error('Ошибка п0купки'),
        })
    }

  } 
}

// ---------- toggleGender ----------

export function toggleGender(gender) {
  gender = !gender;
  /*gender = false;*/
  return {
    type: 'TOGGLE_GENDER',
    payload: gender,
  }
}

export function toggleСolor(color) {
  color = !color;
  return {
    type: 'TOGGLE_COLOR',
    payload: color,
  }
}

// ---------- toggleBar ----------

export function toggleBar1(bar_1, arm) {
  console.log(bar_1, arm);
  console.log(bar_1 === true);
  return dispatch => {
    if (bar_1 === true) {
      bar_1 = !bar_1;
      dispatch({
        type: TOGGLE_BAR1,
        payload: bar_1,
      })

      arm = arm + 1;
      dispatch({
        type: POST_ARM_REQUEST,
        payload: arm,
      })
    } else {
      bar_1 = !bar_1;
      dispatch({
        type: TOGGLE_BAR1,
        payload: bar_1,
      })

      arm = arm - 1;
      dispatch({
        type: DELETE_ARM_REQUEST,
        payload: arm,
      })
    }
  } 
}

export function toggleBar2(bar_2, arm) {
  return dispatch => {
    if (bar_2 === true) {
      bar_2 = !bar_2;
      dispatch({
        type: TOGGLE_BAR2,
        payload: bar_2,
      })

      arm = arm + 1;
      dispatch({
        type: POST_ARM_REQUEST,
        payload: arm,
      })
    } else {
      bar_2 = !bar_2;
      dispatch({
        type: TOGGLE_BAR2,
        payload: bar_2,
      })

      arm = arm - 1;
      dispatch({
        type: DELETE_ARM_REQUEST,
        payload: arm,
      })
    }
  } 
}

export function toggleBar3(bar_3, leg) {
  return dispatch => {
    if (bar_3 === true) {
      bar_3 = !bar_3;
      dispatch({
        type: TOGGLE_BAR3,
        payload: bar_3,
      })

      leg = leg + 1;
      dispatch({
        type: POST_LEG_REQUEST,
        payload: leg,
      })
    } else {
      bar_3 = !bar_3;
      dispatch({
        type: TOGGLE_BAR3,
        payload: bar_3,
      })

      leg = leg - 1;
      dispatch({
        type: DELETE_LEG_REQUEST,
        payload: leg,
      })
    }
  } 
}

export function toggleBar4(bar_4, leg) {
  return dispatch => {
    if (bar_4 === true) {
      bar_4 = !bar_4;
      dispatch({
        type: TOGGLE_BAR4,
        payload: bar_4,
      })

      leg = leg + 1;
      dispatch({
        type: POST_LEG_REQUEST,
        payload: leg,
      })
    } else {
      bar_4 = !bar_4;
      dispatch({
        type: TOGGLE_BAR4,
        payload: bar_4,
      })

      leg = leg - 1;
      dispatch({
        type: DELETE_LEG_REQUEST,
        payload: leg,
      })
    }
  } 
}

export function toggleBar5(bar_5, body) {
  return dispatch => {
    if (bar_5 === true) {
      bar_5 = !bar_5;
      dispatch({
        type: TOGGLE_BAR5,
        payload: bar_5,
      })

      body = body + 1;
      dispatch({
        type: POST_BODY_REQUEST,
        payload: body,
      })
    } else {
      bar_5 = !bar_5;
      dispatch({
        type: TOGGLE_BAR5,
        payload: bar_5,
      })

      body = body - 1;
      dispatch({
        type: DELETE_BODY_REQUEST,
        payload: body,
      })
    }
  } 
}


/*setTimeout(() => {
      dispatch({
        type: POST_MONEY_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      })
    }, 1000)*/

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        const username = r.session.user.first_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}

function makeYearPhotos(photos, selectedYear) {
  let createdYear,
    yearPhotos = []

  photos.forEach(item => {
    createdYear = new Date(item.date * 1000).getFullYear()
    if (createdYear === selectedYear) {
      yearPhotos.push(item)
    }
  })

  yearPhotos.sort((a, b) => b.likes.count - a.likes.count)

  return yearPhotos
}

function getMorePhotos(offset, count, year, dispatch) {
  //eslint-disable-next-line no-undef
  VK.Api.call(
    'photos.getAll',
    { extended: 1, count: count, offset: offset, v: '5.80' },
    r => {
      try {
        photosArr = photosArr.concat(r.response.items)
        if (offset <= r.response.count) {
          offset += 200 // максимальное количество фото которое можно получить за 1 запрос
          getMorePhotos(offset, count, year, dispatch)
        } else {
          let photos = makeYearPhotos(photosArr, year)
          cached = true
          dispatch({
            type: GET_PHOTOS_SUCCESS,
            payload: photos,
          })
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTOS_FAIL,
          error: true,
          payload: new Error(e),
        })
      }
    }
  )
}

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    })

    if (cached) {
      let photos = makeYearPhotos(photosArr, year)
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos,
      })
    } else {
      getMorePhotos(0, 200, year, dispatch)
    }
  }
}
