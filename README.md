# Skyline Enterprise

### Live Website url: [https://warehouse-management-ss.web.app/](https://warehouse-management-ss.web.app/)

## Features and Functionality :

- This Project has 10 pages including NotFound Page.

  - Home
  - Manage Inventories
  - ManageItem
  - AddItem
  - MyItems
  - BrandItems
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

- Manage Inventory has one Component

  - ItemsContainer which is also common in Items section and BrandItems Page

- Home page shows Banner and 6 Items , two chart of Statistics and available Brands links.
- we can go to ManageItem page by clicking Stock Update button in the Items Section or go to ManageInventories page by clicking Manage Inventories button.
- ManageInventories page shows all the items in a grid
- ManageItem Page Shows Details About a Particular item and it has two extra component , one is delivered button which reduced the quantity of a item and another is a form for restoking item.
- Blogs page has Answer's of Four question's.
- Sigin page is used to signin to website via firebase
- SignUp page is used to SignUp to website via firebase
- SignIn and SignUp both contains SocialLogin component which is used to sign in with google.

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
10. recharts (for making charts in the Statictics Section)
11. axios (for fetching data from server)
