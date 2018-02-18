import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'


export default function createStore(reducer) {
  // add your code here
    let state

    const getState = () => {
      return state
    }

    const dispatch = (action) => {
      state = reducer(state, action)
      render()
    }

    dispatch({type: 'beef'})

    return (
      {
        getState,
        dispatch
      }
    )
}





function render() {
  const container = document.getElementById('container');
}
