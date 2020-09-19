const initialState = {
    items: [
        {id: 1, name: "Product 1", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 25, inCart: 0},
        {id: 2, name: "Product 2", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 30, inCart: 0},
        {id: 3, name: "Product 3", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 50, inCart: 0},
        {id: 4, name: "Product 4", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 150, inCart:0},
        {id: 5, name: "Product 5", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 20, inCart: 0},
        {id: 6, name: "Product 6", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 15, inCart: 0},
        {id: 7, name: "Product 7", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 110, inCart:0}
    ]
};

export const loadState = () => {
    const serializedState = localStorage.getItem('store');
    if (!serializedState) {
        saveState(initialState);
        return initialState;
    }
    return JSON.parse(serializedState);
};

export const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('store', serializedState);
};