-- Create table for ChurchServiceType
CREATE TABLE church_service_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create table for ChurchService
CREATE TABLE church_service (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    date TIMESTAMP NOT NULL,
    type_id INTEGER NOT NULL,
    FOREIGN KEY (type_id) REFERENCES church_service_type(id)
);