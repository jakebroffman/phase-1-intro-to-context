// Your code here
function createEmployeeRecord(array) {
    const timeInArray = [];
    const timeOutArray = [];
    const employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: timeInArray,
        timeOutEvents: timeOutArray,
    }
    return employeeRecord;
    
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
}

function createTimeInEvent(employeeRecord, string) {
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(`${string.slice(11 , 13)}00`),
        date: string.slice(0 , 10),
    }
   employeeRecord.timeInEvents.push(timeIn);
   return employeeRecord;
}

function createTimeOutEvent(employeeRecord, string) {
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(`${string.slice(11, 13)}00`),
        date: string.slice(0, 10),
    }
    employeeRecord.timeOutEvents.push(timeOut);
    return employeeRecord;
}

function hoursWorkedOnDate (employeeRecord, dateGiven) {
    let timeIn = "";
    let timeOut = "";
    for (const timeInEvents of employeeRecord.timeInEvents) {
        if (dateGiven === timeInEvents.date) {
             timeIn = timeInEvents.hour
        }
  for (const timeOutEvents of employeeRecord.timeOutEvents) {
        if (dateGiven === timeOutEvents.date) {
            timeOut = timeOutEvents.hour
        }
  };
  }
  const hoursWorked = (timeOut - timeIn) / 100;
  return hoursWorked;
}

function wagesEarnedOnDate (employeeRecord, dateGiven) {
    let timeIn = "";
    let timeOut = "";
    for (const timeInEvents of employeeRecord.timeInEvents) {
        if (dateGiven === timeInEvents.date) {
             timeIn = timeInEvents.hour
        }
  for (const timeOutEvents of employeeRecord.timeOutEvents) {
        if (dateGiven === timeOutEvents.date) {
            timeOut = timeOutEvents.hour
        }
  };
  }
  const wagesEarned = ((timeOut - timeIn) / 100) * employeeRecord.payPerHour;
  return wagesEarned;
}

function allWagesFor (employeeRecord) {
    let dateArray = employeeRecord.timeInEvents.map(arr => arr.date)
    let totalWages = dateArray.reduce((accumulator, currentValue) => accumulator + wagesEarnedOnDate(employeeRecord, currentValue), 0)
    return totalWages;
}

// takes array of objects
//iterates through array passing each object to the wagesEarnedOnDate function
//take results and push to a new array
// use .reduce method on the new array to calculate the total payroll.

function calculatePayroll (employeesArray) {
   let employeePayroll = employeesArray.reduce((accumulator, currentEmployee) => accumulator + allWagesFor(currentEmployee), 0)
   return employeePayroll 
}