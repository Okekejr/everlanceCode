# everlance-app

The everlance app was built with the Github API, it renders a lits of users after you query it through the search input and returns a list of users with more detials, it also guves you an interactive and smooth UI. 
Fully responsive and has Dark and Light Mode features.
The Project uses React Query to fetch data from the API. Check it out https://tanstack.com/query/v4/docs/react/overview

## Installation (for standard modern project) and run project

```bash
yarn
```

```bash
yarn next build
```

```bash
yarn run dev
```

## How to use?

1. On page load the app renders the Homepage with Navbar and Search Bar with some texts.
2. Query the API by Search by username or email and this return a list of users.
3. Each result as  displayed in a card, 3 max per row and 9 in total depending on the search results.
4. Click on the Github logo to go the actual Github website of the user. 
5. Click on the 'View Profile' button to view a profile detail on a different page with more details.
6. Clicking on the Logo takes you back to the homepage.

## Demo

Home Page: 
<img width="1438" alt="Screenshot 2023-02-02 at 6 16 20" src="https://user-images.githubusercontent.com/85338878/216324739-020d2e26-31f9-4200-ac63-23969b046af0.png">

Users Page:
<img width="1440" alt="Screenshot 2023-02-02 at 6 16 34" src="https://user-images.githubusercontent.com/85338878/216324780-a947f117-01d4-4373-87e3-0f3f315eab10.png">

User Profile:
<img width="1440" alt="Screenshot 2023-02-02 at 6 16 44" src="https://user-images.githubusercontent.com/85338878/216324812-9d1de35c-f55b-4982-9c9b-85fcb9aa04b0.png">

Color Modes:
<img width="1440" alt="Screenshot 2023-02-02 at 6 16 52" src="https://user-images.githubusercontent.com/85338878/216324842-7558106e-4ec8-4bc9-80a7-2081c2397921.png">


#### Live link

```
https://everlance-code.vercel.app/
```

## Stack

<img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="next.js" width="40" height="40"> <img src='https://cdn.worldvectorlogo.com/logos/typescript.svg' alt='typescript' width='40' height='40'> <img src='https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg' alt='chakra ui' width='40' height='40'>
