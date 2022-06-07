# Skyline Enterprise

### Live Website url: [https://warehouse-management-ss.web.app/](https://warehouse-management-ss.web.app/)

Warehouse Management Website for managing cars.

## Features and Functionality :

- Logged in users can add new cars and manage car inventories.
- Most popular cars shown in the Banner and Brand wise cars shown in the Brand section.
- Used firebase for authentication (both email and google sign-in were implemented) purposes and MongoDB as a backend database.

- This Project has 10 pages including NotFound Page.

  - Home
  - ManageInventories
  - ManageItem
  - BrandsItem
  - AddItem
  - MyItems
  - Blogs
  - SignIn
  - SignUp
  - NotFound

- Every Page Has Two Common Components

  - Header
  - Footer

- Home page has 4 unique sections or components

  - Banner
  - Items
  - Statistics
  - Brands

- ManageInventories has one Component

  - ItemsContainer which is also common in Items section and BrandsItem page

- Home page shows Banner and 6-items in the Items Section and two charts in the Statistics Section and lists of Brands links to page /brand/brandname.
- we can go to ManageItem page by clicking Stock Update button in the Items Section or go to ManageInventories page by clicking Manage Inventories button.
- ManageInventories page shows all the Items in a grid
- ManageItem Page Shows Details About a Particular Item and also has two extra components and both components used for removing quantity and restocking items.
- Blogs page has Answer's of Four question's.
- SignIn page is used to SignIn to website via firebase
- SignUp page is used to SignUp to website via firebase
- SignIn and SignUp both contains SocialLogin component which is used to sign in with google or github.

## List of **Libraries** use For this Project:

1. react-router-dom (for routing)
2. firebase (for authenticating and hosting)
3. react-firebase-hooks(for using firebase authentication easily)
4. react-icons (for using icons)
5. tailwindcss (framework for css)
6. postcss and autoprefixer
7. react-splide (for making crousel)
8. react-hook-form (for form validation)
9. react-toastify (for showing toast)
10. react-helmet-async (for dynamically adding title in the Pages)
11. axios (for fetching data from the server)
12. recharts (for making charts in the Statistics Section)
