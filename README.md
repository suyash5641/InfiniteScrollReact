

Running the Application

### Install Dependencies: Ensure you have npm  installed. Then, in the root directory of your  project, run:

### `npm install`

### Run the Application: To start the development server, run:

### `npm start`

The application will be accessible at http://localhost:3000.

### Build the Application: To create a production build, run:

### `npm run build`


### 6\. Testing the Infinite Scroll

To manually test the infinite scroll functionality:

Scroll Behavior:

1- Load the application in the browser.

2- Scroll down to the bottom of the page.

3-Observe that additional users are loaded as you reach the bottom.


Loading Spinner:

1- The loading spinner (Loader) should be visible when new users are being fetched

and should disappear once the data is loaded.


Page State:

1- Ensure that the pageRef in the Redux state increments correctly as new users

are loaded.


