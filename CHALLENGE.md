# Notekeeper React App Guide

Welcome to the Notekeeper React App Guide!

This guide will walk you through the requirements for building a Notekeeper app, including CRUD (Create, Read, Update, Delete) actions for notes, UI components involved, and reference to the Notekeeper API.

## Notekeeper API Reference

The Notekeeper API, designed to be consumed by the Notekeeper React App, provides endpoints for managing notes. You can find the Notekeeper API repository [here](https://github.com/DAW-EPIA-MAT/notekeeper-api). Follow the instructions in the repository's README to set up and run the API locally.

Follow the steps below to set up and run the API locally:

1. Clone the Notekeeper API repository to your local machine.
2. Install any necessary dependencies.
3. Run the API server locally using the provided commands.

> [!TIP]  
> You can use HTTP clients (as Postman or Insomnia) to test API endpoints.

## CRUD Operations

The Notekeeper React App should allow users to perform the following actions with notes:

1. **Create**: Users can create new notes.
2. **Read**: Users can view a list of existing notes.
3. **Update**: Users can edit notes.
4. **Delete**: Users can delete existing notes.

> [!TIP]  
> Create a `services/notes` folder to define data fetching over Notekeeper API.

## Data Validation helpers

In the Notekeeper React App, it's essential to validate the data once a form is submitted to ensure that the input provided by the user meets the specified requirements. Data validation helps maintain data integrity and prevents errors caused by invalid input.

When a user submits a form to create or update a note, the input fields (such as name, description, important, status, and due date) must be validated before the data is sent to the server or stored locally.

Define these validation methods:

- `validateType.js`: This validator ensures that each property of the note object has the correct data type. It can check whether each property is of the expected type (e.g., string, boolean) and return true if all properties match their expected types, or false otherwise.

- `validateEnum.js`: This validator ensures that properties with enum values (such as "status") contain values only from the predefined set of options. It can check whether the value of a property matches one of the allowed enum values and return true if it does, or false otherwise.

- `validateNonEmpty.js`: This validator ensures that string properties (such as "name" and "description") are not empty. It can check whether string properties have non-empty content and return true if they do, or false otherwise.

> [!TIP]  
> Create a `helpers/validation` folder to define validation methods.

## Testing Data Validation Helpers

Testing data validation helpers is crucial to ensure that they accurately validate the properties of note objects according to the specified criteria. By writing unit tests for these helpers, we can verify that they correctly identify valid and invalid data, enhancing the reliability of our application.

Define tests for these validators:

- `validateType.test.js`

- `validateEnum.test.js`

- `validateNonEmpty.test.js`

> [!TIP]  
> Create a `helpers/validation/test` folder to define validation tests.

## UI Components

The following UI components are involved in the Notekeeper React App:

1. **NotesList**: Displays a list of existing notes or message 'Empty List'.
1. **Note**: Displays a note with its content and buttons to update and delete.
1. **Update and Delete Buttons**: Allow users to update or delete individual notes from the list.
1. **CreateNoteForm**: Allows users to create new notes by entering required content.
1. **UpdateNoteForm**: Allows users to update a note by entering required content.

Implement best practises to extract components, so you can ensure reusability and maintainability.

> [!TIP]  
> Create a `components` folder to define Rect components.

## Deployment

Both the Notekeeper React App and the Notekeeper API should be deployed as production code:

1. **App Hosting (Netlify)**: Deploy the Notekeeper React App to Netlify for hosting. Follow the deployment instructions provided by Netlify to deploy your React application.
2. **API Hosting (Render)**: Deploy the Notekeeper API to Render for hosting. Follow the deployment instructions provided by Render to deploy your API server.

By following these deployment instructions, you can make your Notekeeper React App and Notekeeper API accessible to users on the internet.

## Conclusion

With this guide, you now have a clear understanding of the requirements for building and deploying the Notekeeper React App. Follow the steps outlined here to create a fully functional note-taking application for your users.