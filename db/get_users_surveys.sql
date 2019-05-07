select users.username, surveys.week, surveys.day, topic, q1, q2, q3, feedback from users
join surveys on users.username = surveys.username
join schedule on schedule.week = surveys.week and schedule.day = surveys.day
where users.username = $1;
