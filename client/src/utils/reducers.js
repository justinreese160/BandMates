// const randomNum = () => Math.floor(Math.random() * 20);

export const reducer = (state, action) => {
    switch (action.type) {
        
        case 'REMOVE_POST': {
            return {
                ...state,
                posts: [...state.posts].filter((car) => post.id !== action.payload),
            };
        }
        default: {
            return state;
        }
    }
};
