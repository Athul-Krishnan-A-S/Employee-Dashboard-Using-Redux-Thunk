import { toggleEdit, toggleModalState } from '../ModalState/ModalStateAction';
import {
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_EMAIL,
    SET_DESIGNATION,
    SET_DOB,
    SET_DOJ,
    SET_EXPERIENCE,
    SET_PHONE,
    FIRST_NAME_ERROR,
    LAST_NAME_ERROR,
    EMAIL_ERROR,
    DESIGNATION_ERROR,
    DOB_ERROR,
    DOJ_ERROR,
    EXPERIENCE_ERROR,
    PHONE_ERROR,
} from './registerDataTypes';

export const setFirstName = (firstName) => ({
    type: SET_FIRST_NAME,
    payload: firstName,
});

export const setLastName = (lastName) => ({
    type: SET_LAST_NAME,
    payload: lastName,
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
});

export const setDesignation = (designation) => ({
    type: SET_DESIGNATION,
    payload: designation,
});

export const setDob = (dob) => ({
    type: SET_DOB,
    payload: dob,
});

export const setDoj = (doj) => ({
    type: SET_DOJ,
    payload: doj,
});

export const setExperience = (experience) => ({
    type: SET_EXPERIENCE,
    payload: experience,
});

export const setPhone = (phone) => ({
    type: SET_PHONE,
    payload: phone,
});

export const setFirstNameError = (hasError) => ({
    type: FIRST_NAME_ERROR,
    payload: hasError,
});

export const setLastNameError = (hasError) => ({
    type: LAST_NAME_ERROR,
    payload: hasError,
});

export const setEmailError = (hasError) => ({
    type: EMAIL_ERROR,
    payload: hasError,
});

export const setDesignationError = (hasError) => ({
    type: DESIGNATION_ERROR,
    payload: hasError,
});

export const setDobError = (hasError) => ({
    type: DOB_ERROR,
    payload: hasError,
});

export const setDojError = (hasError) => ({
    type: DOJ_ERROR,
    payload: hasError,
});

export const setExperienceError = (hasError) => ({
    type: EXPERIENCE_ERROR,
    payload: hasError,
});

export const setPhoneError = (hasError) => ({
    type: PHONE_ERROR,
    payload: hasError,
});

export const submitForm = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8000/api/employee/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(toggleModalState());

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};
export const updateEmployee = (formData) => {
    return async (dispatch) => {
        try {
            console.log(formData)
            const response = await fetch('http://localhost:8000/api/employee/edit', {
                method: 'PUT',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(toggleEdit());

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};
