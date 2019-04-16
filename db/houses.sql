create table theHouses (
    house_id serial primary key,
    property_name text not null,
    the_address text not null,
    city text not null,
    the_state text not null,
    zip text not null
);

insert into theHouses (property_name, the_address, city, the_state, zip)
values('Apartmento Uno', '6665 Dupont Circle', 'Phoenix', 'Arizona', '85034'),('Apartmento Dos', '45 Dupant Circle', 'Seattle', 'Washington', '65034'),('Apartmento Tres', '6555 Dupont Circle', 'Phoenix', 'Michigan', '35034');

select * from theHouses;