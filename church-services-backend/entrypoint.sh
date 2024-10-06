#!/bin/sh

# Run Flyway migrations
./gradlew flywayMigrate

# Start the application
exec java -jar app.war