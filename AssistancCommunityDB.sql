create database ASSISTANCOMMUNITY

use ASSISTANCOMMUNITY

create table ROLE (
	role_id tinyint not null primary key,
	role_name nchar(30) null,
)

create table ACCOUNTADMIN (
	acc_id nchar(50) not null primary key,
	admin_name nchar(100) not null,
	password varchar(max) not null,
	role_id tinyint not null references ROLE(role_id),
	created_date datetime default(getdate())
)


create table ADMIN (
	acc_id nchar(50)
	admin_id nchar(50) not null primary key,
	full_name nvarchar(500) not null,

)


create  table ACCOUNTUSER (
	acc_id nchar(50) not null primary key,
	user_name varchar(max) not null,
	password varchar(max) not null,
	role_id tinyint not null references ROLE(role_id),
	created_date datetime default(getdate()),
	)



