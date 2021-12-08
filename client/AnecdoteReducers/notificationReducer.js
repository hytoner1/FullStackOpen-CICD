let idTime = 0

const notificationReducer = (state = 'Welcome', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
    {
      return action.notification
    }
    case 'CLEAR_NOTIFICATION':
    {
      return ''
    }
    default:
    {
      return state
    }
  }
}

const clearNotification = () => (
  {
    type: 'CLEAR_NOTIFICATION',
  }
)

export const setNotification = (notification, timeout) => (
  async (dispatch) => {
    clearTimeout(idTime)

    dispatch({
      type: 'SET_NOTIFICATION',
      notification,
    })

    idTime = setTimeout(() => {
      dispatch(clearNotification())
    }, timeout * 1000)
  }
)

export default notificationReducer
