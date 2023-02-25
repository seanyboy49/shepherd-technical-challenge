## Local dev setup

run `npm install` to install packages

run `npx prisma migrate dev` to run migrations and sync the database

run `npm run dev` to run the app

run `npx prisma studio` to open the Prisma Studio GUI

## General Notes

**Framework - NextJS**

- React framework that is very popular, well maintained, tons of documentation and examples online
- Typescript support out of the box
- Highly performant with support for static site generation and server side rendering
- Highly opinionated yet flexible

**ORM/DB - Prisma with SQLite**

- Easy to use and powerful. This was my first time using Prisma and I’m definitely sold.
- Typescript support out of the box
- Lots of documentation

**Styling - MaterialUI**

- Easy to use with pretty much every UI Component you would need for a standard web app

## Homepage

- [x] Fetch and display the 3 application options

1. Company application
2. Employee application
3. Auto application

- [x] Each option should link to a relevant application page

## New Application Page

`/[application-type]/new`

- [x] Fetch application configuration by type
- [x] Render a form with the application configuration
- [x] User can fill out form
- [x] Form is validated client side
- [x] User submits form to server
- [x] Server only processes request if auth header is present
- [x] Upon successful submission, redirect to edit page

## Application Edit Page

`/[application-type]/[id]`

- [x] Fetch application configuration by type
- [x] Fetch filled out application values
- [x] Render a form with the application configuration
- [x] Populate fields with pre-filled values
- [x] Form is validated and submitted to server
- [x] Upon successful submission, refresh the page

## API Routes

`POST api/[application-type]`

- [x] Parse application type from request query
- [x] Create appropriate entity based on application type
- [x] Respond with 201
- [x] Handle specific error cases
  - [x] Wrong HTTP method
  - [x] Unauthorized due to no cookie
- [x] Handle all other errors

`PUT api/[application-type/[id]`

- [x] Parse application type from request query
- [x] Update appropriate entity based on application type
- [x] Respond with 200
- [x] Handle specific error cases
  - [x] Wrong HTTP method
  - [x] Unauthorized due to no cookie
- [x] Handle all other errors

## Follow up

- [ ] Client Error boundary
- [ ] Frontend Tests
- [ ] Backend Tests
- [ ] API middleware for error handling
- [ ] API middleware for introspecting cookies
- [ ] List of applications page
  - [ ] Search
  - [ ] Pagination
  - [ ] Sorting
  - [ ] Filters
