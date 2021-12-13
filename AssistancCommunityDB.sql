create database ASSISTANCOMMUNITY
use ASSISTANCOMMUNITY

create table ROLE (
	role_id tinyint not null primary key,
	role_name nchar(30) null,
)
create table ACCOUNTADMIN (
	acc_id char(50) not null primary key,
	admin_name nchar(100) not null,
	password char(1000) not null,
	role_id tinyint not null references ROLE(role_id),
	created_date datetime default(getdate())
)
create table ADMIN (
	admin_id char(50) not null primary key,
	acc_id char(50) not null,
	full_name nvarchar(max) not null,
	date_of_birth date,
	sex varchar(30),
	phone_number char(12),
	email nchar(200),
	address nvarchar(max),
	position nvarchar(200),
	created_date datetime default(getdate()),
	constraint fk_acc_id_admin foreign key (acc_id) references ACCOUNTADMIN(acc_id)
)
create  table ACCOUNTUSER (
	acc_id char(50) not null primary key,
	user_name nchar(100) not null,
	password char(1000) not null,
	role_id tinyint not null references ROLE(role_id),
	created_date datetime default(getdate()),
)
create table USERR (
	user_id char(50) not null primary key,
	acc_id char(50) not null,
	full_name nvarchar(max) not null,
	date_of_birth date,
	sex varchar(30),
	phone_number char(12),
	email nchar(200),
	sub_district nchar(100),
	district nchar(100),
	city nchar(100),
	address nchar(1000),
	longitude float,
	latitude float,
	status nchar(50),
	traffic_id char(100),
	created_date datetime default(getdate()),
	constraint fk_acc_id_user foreign key (acc_id) references ACCOUNTUSER(acc_id)
)
create table TRAFFIC (
	traffic_id char(100) not null primary key,
	user_id1 char(50) not null,
	user_name1 nvarchar(max) not null,
	user_status1 bit default(1),
	user_id2 char(50),
	user_name2 nvarchar(max),
	user_status2 bit,
	start_day datetime default(getdate()),
	end_day datetime,
	description nchar(500),
	traffic_status nchar(100) default('Chua Hoan Thanh'),

)

alter table USERR add constraint pk_traffic_id foreign key(traffic_id) references TRAFFIC(traffic_id)
alter table TRAFFIC add constraint pk_user_id foreign key(user_id1) references USERR(user_id)
alter table TRAFFIC add constraint pk_user_id2 foreign key(user_id2) references USERR(user_id)