# 18 NoSQL: Social Network API

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
- [Walkthrough Video](#walkthrough-video)

## Description
A NoSQL-based Social Network API built using MongoDB, Express.js, and Mongoose. It allows users to create thoughts, react to thoughts, and manage a friend list.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

## API Routes

### User Routes
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a single user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Delete a user
- `POST /api/users/:userId/friends/:friendId` - Add a friend
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend

### Thought Routes
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get a single thought by ID
- `POST /api/thoughts` - Create a thought
- `PUT /api/thoughts/:id` - Update a thought
- `DELETE /api/thoughts/:id` - Delete a thought
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction

## Walkthrough Video

A video walkthrough demonstrating the functionality of the NoSQL Social Network API can be found [here](./public/assets/videos/DEMO%20-%2018%20NoSQL%20Social%20Network%20API.mp4).

## About the Developer

This project was created and developed by **Conor Lee**, a passionate web developer with a focus on backend technologies and a growing interest in NoSQL databases like MongoDB. With experience in creating full-stack applications and managing API development, Conor enjoys solving complex problems and learning new technologies.

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/conormlee/) or check out my [GitHub](https://github.com) for more projects and collaborations.
