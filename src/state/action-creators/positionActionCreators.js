export const moveRobot = (data) => {
  return (dispatch) => {
    dispatch({
      type: "MOVE",
      payload: data
    });
  };
};

export const leftTurnRobot = (data) => {
  return (dispatch) => {
    dispatch({
      type: "LEFT",
      payload: data
    });
  };
};

export const rightTurnRobot = (data) => {
  return (dispatch) => {
    dispatch({
      type: "RIGHT",
      payload: data
    });
  };
};


export const reportPosition = (data) => {
    return (dispatch) => {
        dispatch({
            type: "REPORT",
            payload: data
        })
    }
}

// export const placeRobot = (data) => {
//     return (dispatch) => {
//         dispatch({
//             type: "PLACE",
//             payload: data,
//         })
//     }
// }


export const placeNewRobot = (data) => {
  return (dispatch) => {
      dispatch({
          type: "PLACE NEW",
          payload: data,
      })
  }
}


export const selectRobot = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SELECT",
      payload: data
    })
  }
}


export const resetBattle = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    })
  }
}

export const deleteRobot = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE",
      payload: data
    })
  }
}