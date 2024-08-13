import { TOGGLE_EDIT, TOGGLE_MODAL } from "./ModalStateTypes";

export const toggleModalState = () =>({
    type:TOGGLE_MODAL
});
export const toggleEdit = () =>({
    type:TOGGLE_EDIT
});