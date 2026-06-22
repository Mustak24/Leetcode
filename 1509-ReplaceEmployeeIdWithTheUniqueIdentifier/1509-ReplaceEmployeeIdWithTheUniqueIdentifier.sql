-- Last updated: 6/22/2026, 12:52:36 PM
# Write your MySQL query statement below
select unique_id, name from Employees 
    left join EmployeeUNI on Employees.id = EmployeeUNI.id