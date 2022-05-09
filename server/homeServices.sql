DROP TABLE IF EXISTS users, service CASCADE; 

create table service (
service_id int primary key generated always as identity,
service_name text,
category text not null,
price_range_estimate decimal (7,2) not null,
service_photo text not null,
created_date timestamptz not null,
edited_date timestamptz not null,
user_id int
);

create table users (
user_id int primary key generated always as identity,
name varchar (100) not null,
phoneNumber int not null,
email varchar (100) not null,
password varchar (100) not null,
role text not null
);

insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งเครื่องดูดควัน', 'บริการห้องครัว', 5805.22, 'libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo', '2021-08-15T04:00:55Z', '2021-10-07T11:42:31Z', 1);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ล้างแอร์', 'บริการทั่วไป', 3406.16, 'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor', '2021-07-11T13:19:59Z', '2022-03-05T18:16:13Z', 2);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ซ่อมแอร์', 'บริการทั่วไป', 2748.54, 'luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis', '2022-04-06T20:54:35Z', '2022-02-04T00:55:15Z', 3);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ซ่อมตู้ครัว', 'บริการห้องครัว', 9951.95, 'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis', '2021-12-13T23:58:56Z', '2021-10-29T16:02:29Z', 4);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ซ่อมเครื่องซักผ้า', 'บริการทั่วไป', 1389.99, 'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam', '2021-08-31T03:24:17Z', '2021-07-17T00:17:44Z', 5);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งชักโครก', 'บริการห้องน้ำ', 1551.76, 'erat id mauris vulputate elementum nullam varius nulla facilisi cras non', '2021-09-16T17:06:46Z', '2021-07-04T14:13:47Z', 6);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งเตาแก๊ส', 'บริการห้องครัว', 1340.75, 'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', '2021-06-14T20:09:15Z', '2021-07-03T12:23:32Z', 7);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งเครื่องทำน้ำอุ่น', 'บริการห้องน้ำ', 5039.39, 'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in', '2021-11-29T17:24:14Z', '2022-05-06T13:27:44Z', 8);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งชักโครก', 'บริการห้องน้ำ', 2759.59, 'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi', '2021-12-15T08:16:47Z', '2021-07-18T04:15:58Z', 9);
insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date, user_id) values ('ติดตั้งเตาแก๊ส', 'บริการห้องครัว', 3620.08, 'interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z', 10);

insert into users (name, phoneNumber, email, password, role) values ('Stephan Edmeades', '0879316420', 'sedmeades0@goodreads.com', 'iP4EAxpCF4i', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Fredia Nijs', '0342821343', 'fnijs1@twitpic.com', 'Yuapex', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Tessie Gadeaux', '0228320111', 'tgadeaux2@soundcloud.com', 'JJFYDDIFdQ', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Corrine Revill', '0298476902', 'crevill3@wunderground.com', 'CU6F9kkpdx9H', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Alexi Sword', '0292112304', 'asword4@hibu.com', 'GWlTsOVW', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Bernetta Goatman', '0885067947', 'bgoatman5@creativecommons.org', 'dlCSIq78BU', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Burnaby Trouel', '0607150189', 'btrouel6@microsoft.com', 'pwRWWe5rC3x', 'admin');
insert into users (name, phoneNumber, email, password, role) values ('Del Kliement', '0165268368', 'dkliement7@360.cn', 'PX6YMnV', 'admin');