-- V1__Create_church_service_tables.sql

-- Create table for ChurchServiceType
CREATE TABLE ChurchServiceType (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create table for ChurchService
CREATE TABLE ChurchService (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    type_id INTEGER NOT NULL,
    FOREIGN KEY (type_id) REFERENCES ChurchServiceType(id)
);