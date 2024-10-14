import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    selectedDepartments: [],
    errorMessage: '',
  },
  reducers: {
    addEmployeeSuccess: (state, action) => {
      state.employees.push(action.payload);
    },
    addEmployeeFailure: (state, action) => {
      state.errorMessage = action.payload;
    },
    setDepartments: (state, action) => {
      state.selectedDepartments = action.payload;
    },
  },
});

export const { addEmployeeSuccess, addEmployeeFailure, setDepartments } =
  employeeSlice.actions;

export const addEmployee = (employee) => async (dispatch) => {
  try {
    const headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    console.log(employee)
    const response = await axios.post('/add-employee', employee, { headers });
    dispatch(addEmployeeSuccess(response.data));
  } catch (error) {
    dispatch(addEmployeeFailure('Failed to add employee.'));
  }
};

export default employeeSlice.reducer;
