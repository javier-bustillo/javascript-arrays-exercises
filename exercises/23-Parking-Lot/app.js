let parking_state = [
    [1, 0, 1, 1],
    [0, 0, 0, 2],
    [1, 1, 2, 1],
    [2, 1, 1, 1]
]

function getParkingLotState(arrOfArrs) {
    const state = {
        totalSlots: 0,
        availableSlots: 0,
        occupiedSlots: 0
    }
    // const newArr = [].concat.apply([], arrOfArrs);
    const newArr = arrOfArrs.reduce((a, b) => {
        return a.concat(b);
    });

    for (x of newArr) {
        if (x === 1) {
            state.occupiedSlots += 1;
        } else if (x === 2) {
            state.availableSlots += 1;
        }
    }
    state.totalSlots = state.occupiedSlots + state.availableSlots;
    return state;
}

console.log(getParkingLotState(parking_state));