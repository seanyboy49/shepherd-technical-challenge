# Todo

## Homepage

- Fetch and display the 3 application options

1. Company application
2. Employee application
3. Auto application

- Each option should link to a relevant application page

## Application Submit Page

/applications/<application_type>

- Fetch application configuration by type
- Render a form with the application configuration
- User can fill out form
- Form is validated and submitted to server
- Upon successful submission, redirect to edit page

## ## Application Edit Page

/applications/<application_type>/<id>

- Fetch application configuration by type
- Fetch filled out application values
- Render a form with the application configuration
- Populate fields with pre-filled values
- Form is validated and submitted to server
- Upon successful submission, refresh the page
