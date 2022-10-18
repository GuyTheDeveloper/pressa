create database pressa;

\c pressa;

create extension pgcrypto;

create table admins (
    admin_id serial primary key,
    username varchar(32) not null,
    password varchar(60) not null
);


create table categories (
    category_id serial primary key,
    category_name varchar(25) not null,
    status varchar(17) default 'active',
    created_at timestamp default current_timestamp
); 

create table sub_categories (
    subcategory_id serial primary key,
    category_id int  references categories(category_id),
    subcategory_name varchar(45) not null,
    status varchar(17) default 'active',
    created_at timestamp default current_timestamp
);

create table events (
    event_id serial primary key,
    event_date varchar(10) not null,
    event_time varchar(5) not null,
    category_id int references categories(category_id),
    subcategory_id int references sub_categories(subcategory_id),
    event_type varchar(10) not null,
    link text not null,
    user_type varchar(10) not null,
    user_fullname varchar(50) not null,
    user_profession varchar(50) not null,
    user_contact varchar(12) not null,
    user_spare_contact varchar(12) not null,
    user_legal_name varchar(55),
    description text not null,
    event_image text not null,
    event_text text not null,
    view_count int default 0,
    status varchar(17) default 'pending',
    created_at timestamp default current_timestamp
)