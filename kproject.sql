create database kproject;
use kproject;
create table menu (
	id int not null primary key auto_increment,
	menu_name char(40),
    price int,
    kind char(20)
);

#drop table menu;
#select * from menu;

create table admin (
	request_status char(40)
);

create table customer(
	phone_number char
);

create table cart(
	id int,
	cart_menu_name char(40),
    cart_price int,
    cart_tem char(10),
    cart_num int,
    phone_number char(20)
);
#drop table cart;
#select * from cart;

insert into kproject.menu (menu_name, price, kind) values ('에스프레소', 2300, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('아메리카노', 2300, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('카페라떼', 3300, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('카페모카', 3800, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('바닐라라떼', 3500, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('카라멜마끼아또', 3800, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('헤이즐넛라떼', 3500, 'coffee');
insert into kproject.menu (menu_name, price, kind) values ('콜드브루(디카페인)', 3300, 'coffee');

insert into kproject.menu (menu_name, price, kind) values ('초코 스무디', 3900, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('녹차 스무디', 3900, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('플레인 요거트 스무디', 3900, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('딸기 요거트 스무디', 3900, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('망고 요거트 스무디', 3900, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('밀크 셰이크', 5000, 'smoothie');
insert into kproject.menu (menu_name, price, kind) values ('커피 셰이크', 5300, 'smoothie');

INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('복숭아아이스티', 2900, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('초코라떼', 3500, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('그린티라떼', 3500, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('딸기라떼', 3900, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('딸기에이드', 3900, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('레몬에이드', 3600, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('자몽에이드', 3600, 'NON-coffee');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('패션후르츠에이드', 3900, 'NON-coffee');

INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('밀크티', 3800, 'TEA-tavalon');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('스위트 레몬그라스', 3500, 'TEA-tavalon');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('자스민 펄', 3500, 'TEA-tavalon');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('망고멜랑', 3500, 'TEA-tavalon');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('피치우롱', 3500, 'TEA-tavalon');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('쿨 민트', 3500, 'TEA-tavalon');

INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('블룸즈버리라떼', 4300, 'SIGNATURE');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('베리더티', 4300, 'SIGNATURE');
INSERT INTO kproject.menu (menu_name, price, kind) VALUES ('썸머펀치', 3800, 'SIGNATURE');
