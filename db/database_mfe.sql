create database MelodyForEmotion;
use MelodyForEmotion;

create table USERACCOUNTS(
user_id char(10),
username varchar(20),
password varchar(20),
email varchar(100)
constraint pk_user_id primary key (user_id)
);

insert into USERACCOUNTS values('U01', 'han', '123', 'quanghan14@gmail.com')