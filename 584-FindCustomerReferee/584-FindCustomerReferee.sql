-- Last updated: 6/22/2026, 12:53:38 PM
# Write your MySQL query statement below
select name from Customer 
    where referee_id is NULL or referee_id != 2;