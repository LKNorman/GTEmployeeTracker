DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department VARCHAR(30) NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role VARCHAR(30) NULL,
    department VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    PRIMARY KEY (id) 
);