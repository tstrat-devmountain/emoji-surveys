drop table if exists surveys; -- master table with references to others
drop table if exists users;
drop table if exists schedule;

create table users (
    username text primary key
    ,email text
    ,password text
    ,display_name text
);

create table schedule (
    week int,
    day int,
    topic text,
    primary key(week, day)
);

create table surveys (
    username text references users(username),
    week int,
    day int,
    q1 int,
    q2 int,
    q3 int,
    feedback text,
    foreign key (week, day) references schedule(week, day),
    primary key(username, week, day)
);

-- insert into users (username, email, password)
-- values ('tstrat', 't.strat7@gmail.com', 'password12');

-- insert into schedule (week, day, topic)
-- values
-- (1, 1, 'Unix and Git'),
-- (1, 2, 'Javascript I');
-- insert into surveys (username, week, day, q1, q2, q3, feedback)
-- values
-- ('tstrat', 1, 1, 3, 3, -3, 'this sux');

-- select users.username, surveys.week, surveys.day, topic, q1, q2, q3, feedback from users
-- join surveys on users.username = surveys.username
-- join schedule on schedule.week = surveys.week and schedule.day = surveys.day;
