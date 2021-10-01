export const initialState = {
    LikedPics: [],
};

// state of application and action is what you gonna do
const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_LIST":

            return {
                ...state,
                // change LikedPics with add action
                LikedPics: [...state.LikedPics, action.item],

            };

        case "REMOVE_FROM_LIST":
            // findIndex does any of LikedPics item match action id that just passed in
            const index = state.LikedPics.findIndex(
                (ListItem) => ListItem.id === action.id
            );
            // copy basket into temporary variable newList
            let newList = [...state.LikedPics];

            if (index >= 0) {
                // if found item
                // at index position splice one item
                newList.splice(index, 1);
            } else {
                console.warn(`${action.id} its not in LikedPics! `);
            }

            return {
                // new item with remaining item in LikedPics
                ...state,
                LikedPics: newList,
            };


        default:
            return state;
    }
};

export default reducer;
