# University of Rochester SASE Website
### By Joshua Choi and Desmond Lai

### Known Issues
- Fix memory leak on Profile.js and potentially other pages due to middleware IsAuthenticated.js
- Background image for Members.js is clipped off on bigger screens. (2560x1440)

## Frontend Tasks

Create Email Verification Page
- Wait until we have an email server for this.

Implement embedded Google Drive Links for Resumes.

Figure out how to implement General Information and Projects for Profile.js

Fetch information for Members.js

### Backend Integration

## Backend Tasks
- Create POST request for Edit Profile to work.
  - Use multer to handle profile image uploading.
  - For cover images, may (or may not) need to use external uploader as it is a CSS background-image.
    - https://stackoverflow.com/questions/57111197/react-path-to-public-folder-in-css-background-image
- Create POST request for Change Password.
- Email Verification Page + Send Email for Contact Us Page
  - Wait until we have an email server before doing this.
    
### APIs
- Create an API request to CCC (CampusGroups) to pull events to the homepage from the SASE event page.