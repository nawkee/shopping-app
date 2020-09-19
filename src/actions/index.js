// export const addItem = (id) => ({
//     type: 'ADD_ITEM',
//     payload: id
// });
// export const delItem = (id) => ({
//     type: 'DEL_ITEM',
//     payload: id
// });
// export const minusItem = (id) => ({
//     type: 'MINUS_ITEM',
//     payload: id
// });

export const addItem = (id) => ({
    type: 'CHANGE_QTY',
    payload: {id, value: 'item.inCart + 1'}
});
export const delItem = (id) => ({
    type: 'CHANGE_QTY',
    payload: {id, value: '0'}
});
export const minusItem = (id) => ({
    type: 'CHANGE_QTY',
    payload: {id, value: 'item.inCart - 1'}
});