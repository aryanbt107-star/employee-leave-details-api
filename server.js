const express = require('express');

const attendanceRoutes = require('./routes/attendance');
const employeeRoutes = require('./routes/employee');
const salaryRoutes = require('./routes/salary');
const leaveRoutes = require('./routes/leave');

const app = express();

app.use('/attendance', attendanceRoutes);
app.use('/employee', employeeRoutes);
app.use('/leave', leaveRoutes);
app.use('/salary', salaryRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});