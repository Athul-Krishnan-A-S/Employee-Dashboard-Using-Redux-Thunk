
export const fetchemployeeData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:8000/api/employee/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const employees = data.data.list || [];
            dispatch({ type: 'SET_EMPLOYEE_DATA', payload: employees });

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};


export const deleteEmployee = (employeeID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:8000/api/employee/delete`, {
                method: 'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ employeeId : employeeID })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            dispatch(fetchemployeeData());

        } catch (error) {
            console.error('Error:', error.message);
        }
    };
};