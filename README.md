# Employee Leave Details API

## Overview

Employee Leave Details API is a RESTful API built using Node.js, Express.js, and MySQL. It allows organizations to track employee leave applications, leave history, leave types, and leave summaries.

The API retrieves leave-related information from the HRMS database and returns structured JSON responses.

## Technologies Used

* Node.js
* Express.js
* MySQL
* XAMPP
* phpMyAdmin
* VS Code

## Features

* Get employee leave summary
* Get total leave applications
* Get total leave days taken
* View leave type-wise breakdown
* Get employee leave history
* JSON-based API responses
* Error handling for invalid employee IDs

## Project Structure

employee-leave-details-api

├── routes

│ └── leave.js

├── db.js

├── server.js

├── package.json

└── README.md

## API Endpoints

### Get Employee Leave Summary

```http
GET /leave/:employeeId
```

### Example

```http
GET /leave/1
```

### Sample Response

```json
{
  "employeeId": "1",
  "employeeName": "Test Emp",
  "totalApplications": 0,
  "totalLeaveDays": 0,
  "leaveTypes": []
}
```

### Get Employee Leave History

```http
GET /leave/:employeeId/history
```

### Example

```http
GET /leave/1/history
```

### Sample Response

```json
[
  {
    "leaveapply_id": 1,
    "leavetype": "Casual Leave",
    "fromdate": "2026-06-01",
    "todate": "2026-06-03",
    "leavenoofdays": 3,
    "leavereason": "Personal Work",
    "leavestatusid": 1
  }
]
```

## Database Tables Used

* employee
* leaveapply
* leavetype

## Installation

```bash
npm install
```

Start the server:

```bash
node server.js
```

Server URL:

```http
http://localhost:3000/leave/1
```

## Future Enhancements

* Leave Approval Workflow
* Leave Balance Calculation
* Monthly Leave Reports
* Manager Approval Tracking
* Authentication & Authorization
* Swagger Documentation

## Author

Aryan Thakur
# employee-leave-details-api
REST API built with Node.js, Express.js, and MySQL to retrieve employee details including personal, contact, department, branch, and employment information.REST API built with Node.js, Express.js, and MySQL to manage employee details, salary information, attendance tracking, and leave management.
