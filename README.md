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
- Backend will be handled through :9000/api
    - Proxy is setup in package.json (React), and cors package is installed (Backend)
- /api/account route will handle all user authentication and information
    - / index will send a json containing all database data for user specified.
    - /login subroute will handle login requests
    - /register subroute will handle registration requests
    - /verify subroute will handle email verification
- TODO

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
    - Projects
        - Some toggle for featured project
    
### APIs
- Create an API request to CCC (CampusGroups) to pull any events from the SASE event page.
