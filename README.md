# Assignment -2

### Live Server Link: https://assigments-six.vercel.app/

- At first clone my GitHub repo. then install all the packages.
- To install all the packages. go to the terminal and command

```npm
  npm i
```

- After Installing all the packages. run npm run start:dev to start the server.

```npm
npm run start:dev
```


-  Create a Course Endpoint: **POST /api/course**
- Query Parameters for API Requests Example: **GET ?page=2,?limit=10,title, price, startDate, endDate, language, durationInWeeks,?sortBy=startDate,?sortOrder=desc,?minPrice=20.00&maxPrice=50.00,?tags=Programming,?startDate=2023-01-01&endDate=2023-12-31,?language=English,?provider=Tech Academy,?durationInWeeks=8,?level=Intermediate**
- Get User By Id Endpoint: **GET /api/users/:userId**
- Update User Endpoint: **PUT /api/users/:userId**
- Delete User Endpoint: **DELETE /api/users/:userId**
- Create Order for a Specific User Endpoint: **PUT /api/users/:userId/orders**
- Get Orders for a Specific User Endpoint: **GET /api/users/:userId/orders**
- Calculate Total Price for a Specific User Endpoint: **GET /api/users/:userId/orders/total-price**
