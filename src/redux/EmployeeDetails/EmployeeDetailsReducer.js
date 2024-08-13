import { SET_EMPLOYEE_DATA } from "./EmployeeDetailsTypes";

const initialState = [];

const employeeDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEE_DATA:
            return Array.isArray(action.payload) ? [...action.payload] : state;
        default:
            return state;
    }
};

export default employeeDetailsReducer;