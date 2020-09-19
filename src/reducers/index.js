import '../actions';

export default (state, {type, payload}) => {
    switch (type) {
        case 'CHANGE_QTY':
            return {
                ...state,
                items: changeItemQty(state.items, payload.id, payload.value),
            };
        // case 'ADD_ITEM':
        //     return {
        //         ...state,
        //         items: changeItemQty(state.items, payload, 'item.inCart + 1'),
        //     };
        // case 'MINUS_ITEM':
        //     return {
        //         ...state,
        //         items: changeItemQty(state.items, payload, 'item.inCart - 1'),
        //     };
        // case 'DEL_ITEM':
        //     return {
        //         ...state,
        //         items: changeItemQty(state.items, payload, '0'),
        //     };
        default:
            return state;
    }
}

const changeItemQty = (items, id, value) => {
    return items.map(item => ({
        ...item,
        ...(item.id === id && {
            inCart: eval(value)
        })
    }))
};