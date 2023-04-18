
INSERT INTO department(departmentName)
VALUES("Engineering"), ("Sales"), ("Finance"), ("Legal"), ("Marketing");

INSERT INTO roles(title, salary, departmentId)
VALUES("Engineer", 90000, 1), ("Senior Engineer", 120000, 1), ("CFO", 45000, 3), ("Manager", 150000, 4), ("Sales Manager", 90000, 2);

INSERT INTO employee(firstName, lastName, rolesId, managerId)
VALUES ('Anthony', 'Lieu', 1, 2), ('Abed', 'Hasan', 1, null), ('Sasha', 'Peters', 1, 2), ('Rich', 'Widtmann', 4, 4);

show tables;
select * from department, roles, employee;
