import { TOGGLE_EDIT, TOGGLE_MODAL } from "./ModalStateTypes";

const initialState = {
    isModalOpen: false,
    isEdit: false,
};

const isModalOpenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state, 
                isModalOpen: !state.isModalOpen
            };
        case TOGGLE_EDIT:
            return {
                ...state,
                isEdit: !state.isEdit
            };
        default:
            return state;
    }
};

export default isModalOpenReducer;
