# TODO List (Temporary Documentation)

## Frontend Tasks

### Warnings
- Need to start using React.createElement() or JSX as React.createFactory() is depreciated.
    - Possibly need to find a replacement for the Google Map package as it contains legacy code.
- Some browser extensions seems to cause site to throw an error "The message port closed before a response was received."

### Registration
- Email Verification Page or Notification

### Backend Integration
- Filling in states and props with information fetched from backend through API calls.

## Backend Tasks

### Routes
- [x] Backend will be handled through :9000/api
    - [x] Proxy is setup in package.json (React), and cors package is installed (Backend)
        - [ ] Solution for production build can be found here: https://stackoverflow.com/questions/55106295/npm-run-build-does-not-use-proxy
- [ ] Unsecured Routes
    - [ ] ~~/ index will send a json containing all database data for user specified.~~
    - [x] /signin subroute will handle login requests through POST
    - [x] /signup will handle registration requests through POST
    - [x] /signout will handle sign out requests through POST
    - [ ] /verifyemail subroute will handle email verification through POST
        - This implementation will use codes rather than verifying through GET requests as it is more secure.
- [ ] Secured Routes (ones that require user authentication)
    - [ ] /profile/<user_id> will send the information of the user that is queried through GET.
    - [ ] /profile/update will update information of the logged in user through POST.
    - [ ] /profile will send information of the logged in user through GET.
    - [ ] /members will query users through POST and respond back with information.

### User Model
- Authentication Information
    - Email Address
    - Password
- User Information
    - First Name
    - Last Name
    - Class Year (Will pull from API in future)
- Member Page Information
    - Major
    - Minor
    - Main Study
- Profile Page Information
    - General Information
    - Biography
    - Social Media Links
        - LinkedIn
        - Facebook
        - Instagram
        - Personal Website
    - Resume Link
    - Project
        - Some toggle for featured project
    
### APIs
- Create an API request to CCC (CampusGroups) to pull any events from the SASE event page.
