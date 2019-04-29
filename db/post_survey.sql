insert into surveys (username, week, day, q1, q2, q3, feedback)
values ($1, $2, $3, $4, $5, $6, $7) returning *;
