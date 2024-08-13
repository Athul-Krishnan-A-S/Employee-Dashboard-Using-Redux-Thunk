import {
    REGISTER_EMAIL,
    REGISTER_PASSWORD,
    REGISTER_CONFIRM_PASSWORD,
    EMAIL_ERROR,
    PASSWORD_ERROR,
    USER_EXISTS,
}from './signUpDataTypes';
import { toggleLoginState } from '../../redux/LoginState/loginStateAction';

export const  registerEmail = (email) => ({
    type:REGISTER_EMAIL,
    payload:email,
});

export const registerPassword = (password) => ({
    type:REGISTER_PASSWORD,
    payload:password,
});

export const registerConfirmPassword = (confirmpassword) => ({
    type:REGISTER_CONFIRM_PASSWORD,
    payload:confirmpassword,
});
export const setEmailError = (hasError) => ({
    type:EMAIL_ERROR,
    payload:hasError,
});
export const setPasswordError = (hasError) => ({
    type:PASSWORD_ERROR,
    payload:hasError,
});
export const setUserExists = (hasError) => ({
    type:USER_EXISTS,
    payload:hasError,
});

export const submitForm = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                if(response.status === 422){
                    dispatch(setUserExists('USER ALREADY EXISTS'));
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(toggleLoginState())

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};

export const submitLoginForm = (formData,navigate) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            localStorage.setItem('token',data.data.token)
            navigate('/dashboard');

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};