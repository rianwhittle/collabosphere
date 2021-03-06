# Collabosphere

Collabosphere is a collection of Instructure Canvas Basic LTI tools, allowing for innovative functionality to be added to any course site:

#### Asset Library

The Asset Library is a place where students and instructors can collect relevant materials for the course. The materials can  be seen by the other students in the class and can be discussed, liked, disliked, etc.

#### Whiteboarding Tool

The Whiteboarding Tool allows for students to collaboratively work on whiteboards. Whiteboards can be used to remix assets from the Asset Library, create mindmaps, provide feedback, etc.

#### Engagement Index

The Engagement Index provides a leaderboard based on the student's activity in the course. The Engagement Index will record activities such as discussion posts, likes, comments, etc.

## Development Environment

Note: this documentation is currently limited to OS X.

### PostgresSQL

Collabosphere uses PostgresSQL as its database. In order to set up PostgresSQL and the required database and database users, the following steps should be taken:

```
# Install postgres
brew install postgresql

# Start postgres
postgres -D /usr/local/var/postgres

# Create a database and user
psql template1
  template1=# CREATE USER collabosphere WITH PASSWORD 'collabosphere';
    CREATE ROLE
  template1=# CREATE DATABASE collabosphere;
    CREATE DATABASE
  template1=# CREATE DATABASE collabospheretest;
    CREATE DATABASE
  template1=# GRANT ALL PRIVILEGES ON DATABASE collabosphere TO collabosphere;
    GRANT
  template1=# GRANT ALL PRIVILEGES ON DATABASE collabospheretest TO collabosphere;
    GRANT
```

### Collabosphere

In order to install and start the Collabosphere app server, the following steps should be taken:

```
# Clone the Collabosphere codebase
git clone git://github.com/ets-berkeley-edu/collabosphere.git

# Install the npm dependencies
npm install

# Run Collabosphere
node app
```