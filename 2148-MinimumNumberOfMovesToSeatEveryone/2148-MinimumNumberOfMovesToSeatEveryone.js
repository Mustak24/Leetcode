// Last updated: 6/22/2026, 12:51:32 PM
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats = seats.sort((a,b)=>a-b)
    students = students.sort((a,b)=>a-b)
    let sum = 0;
    for(let i=0; i<seats.length; i++){
        let dif = seats[i]-students[i];
        sum = dif < 0 ? -dif + sum : dif + sum;
    }
    return sum;
};