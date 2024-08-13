import { createStore, combineReducers, applyMiddleware } from 'redux';
import isLoginReducer from './LoginState/loginStateReducer';
import registerDataReducer from './RegisterData/registerDataReducer';
import { thunk } from 'redux-thunk'
import SignupReducer from './SignUpData/signUpDataReducer';
import employeeDetailsReducer from './EmployeeDetails/EmployeeDetailsReducer';
import isModalOpenReducer from './ModalState/ModalStateReducer';

const rootReducer = combineReducers({
    isLogin: isLoginReducer,
    registerData: registerDataReducer,
    signUpData:SignupReducer,
    employeeDetails:employeeDetailsReducer,
    isModalOpen:isModalOpenReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
