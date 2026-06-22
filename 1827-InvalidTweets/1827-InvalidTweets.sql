-- Last updated: 6/22/2026, 12:52:08 PM
# Write your MySQL query statement below
select tweet_id from Tweets
    where length(content) > 15;