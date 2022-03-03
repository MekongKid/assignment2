// The "Grade Assigner" Application
// Use else if statement

let grade = prompt ('Enter the student\s grade', alert('Only numbers between 1 and 100 are accepted!'));

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) { 
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

// console printout
for (var i = 60; i <= 100; ++i ) {
  console.log ('For ' + i + ', You received a ' + assignGrade(i));
}

function assignGrade(score) {
    if (score > 90) return 'A';
    if (score > 80) return 'B';
    if (score > 70) return 'C';
    if (score > 65)  return 'D';
    return 'F';  
}

