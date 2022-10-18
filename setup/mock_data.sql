insert into admins (username, password) values ('admin', crypt('but you gotta focus', gen_salt('bf')));

insert into categories(category_name) values ('IT'),('Biznes'),('Sport'),('Ta''lim');

insert into sub_categories(category_id,subcategory_name) values 
(1,'Web dasturlash'),
(1,'Mobile dasturlash'),
(1,'Robot,Ai dasturlash'),
(2,'Menejment'),(2,'Kredit va audit'),
(3,'Boks'),(3,'Futbol'),
(4,'Matematika'),(4,'Fizika'),
(4,'Kimyo'),(4,'Biologiya');

insert into events (event_date,event_time,category_id,
subcategory_id,event_type,link,user_type,
user_fullname,user_profession,user_contact,
user_spare_contact,user_legal_name,description,
event_image,event_text)
values ('17/01/22','15:00',2,4,'online','https://kun.uz','jismoniy',
'Alisher Isaev','Tadbirkor','998990062665','998990062665',null ,'Alisher Isaevdan biznes va IT boyicha master klass','https://picsum.photos/500','kelajak sari olg''a');
