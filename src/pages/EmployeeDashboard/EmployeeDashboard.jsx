import Button from '../../components/Button/Button';
import EmployeeDashboardHeader from '../../components/EmployeeDashboardheader/EmployeeDashboardheader';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import './employeeDashboard.css';
import { useEffect, useState } from 'react';
import { AddEmployeeModal } from '../../components/AddEmployeeModal/addEmployeeModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchemployeeData } from '../../redux/EmployeeDetails/EmployeeDetailsActions';

function EmployeeDashboard() {
    const { isModalOpen } = useSelector((state) => state.isModalOpen);
    const isEdit = useSelector((state) => state.isModalOpen.isEdit);

    useEffect(() => {
        if (!isModalOpen) {
            localStorage.removeItem('searchId');
        }
    }, [isModalOpen])

    const [searchFor, setSearchFor] = useState('');
    const [filteredEmployee, setFilteredEmployee] = useState();

    const handleSearchBox = (event) => {
        setSearchFor(event.target.value);
        searchEmployee(searchFor)
    }
    const employeeData = useSelector(state => state.employeeDetails);
    console.log(employeeData)
    const searchEmployee = (searchFor) => {
        const filteredEmployees = employeeData.filter(employee =>
            employee.fname.includes(searchFor) ||
            employee.email.includes(searchFor) ||
            employee.designation.includes(searchFor)
        );
        setFilteredEmployee(filteredEmployees);
        return filteredEmployees;
    };

    return (
        <div className="employee-dashboard-container">
            {(isModalOpen || isEdit) && <AddEmployeeModal />}
            <EmployeeDashboardHeader />
            <div className='welcome-container'>
                <p>Welcome to Employee Dashboard</p>
            </div>
            <div className='search-container'>
                <input className='search-field' type='text' placeholder='Search for employee name,email or designation' onChange={handleSearchBox}></input>
                <Button value='Search' className='searchBtn' onClick={handleSearchBox} />
            </div>
            <EmployeesTable filteredEmployee={filteredEmployee} />
        </div>
    );
}
export default EmployeeDashboard;