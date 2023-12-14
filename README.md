# Assignment -3

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
- Create a Category: **POST /api/categories**
- Get All Categories: **GET /api/categories**
- Create a Review Endpoint: **POST /api/reviews**
- Update a Course (Partial Update with Dynamic Update) Endpoint: **PUT /api/courses/:courseId**
- Get Course by ID with Reviews Endpoint: **GET /api/courses/:courseId/reviews**
- Get the Best Course Based on Average Review (Rating) Endpoint: **GET /api/course/best**
