Here’s a structured `README.md` file for your project, which describes its functionality and usage:

---

# File Management System

This project is a simple **File Management System** using **Node.js** and **Express**. It allows users to create, read, and edit files within a specific folder. The application uses EJS for rendering views and provides a web interface for managing text files.

## Features

- **Create Files**: Users can create new text files by providing a title and content.
- **Read Files**: List all available files and view the content of individual files.
- **Edit Files**: Rename existing files.

## Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The app will be running on [http://localhost:4000](http://localhost:4000).

## Usage

### 1. Home Page

The home page displays a list of all files in the `files` directory.

### 2. Create a New File

- Navigate to the home page.
- Submit a form to create a new file by providing:
  - A **title** (used as the file name).
  - **Content** (saved in the file).

### 3. View a File

Click on any file from the list on the home page to view its contents.

### 4. Edit a File

- Navigate to a file’s page.
- Edit the file name by submitting a new name for the file.
- The file will be renamed.

## Project Structure

```plaintext
├── views
│   ├── index.ejs         # Displays all the files
│   ├── show.ejs          # Displays the content of a file
│   ├── edit.ejs          # Allows renaming a file
├── files                 # Directory where files are created/stored
├── public                # Static assets (e.g., CSS)
├── app.js                # Main application logic
├── package.json          # Project configuration and dependencies
```

## Routes

### GET `/`

- **Description**: Displays the list of files.
- **Renders**: `index.ejs`

### POST `/create`

- **Description**: Creates a new file with the provided title and content.
- **Redirects**: To the home page (`/`).

### GET `/file/:filename`

- **Description**: Reads and displays the content of a file.
- **Renders**: `show.ejs`

### GET `/edit/:filename`

- **Description**: Displays a form to rename the file.
- **Renders**: `edit.ejs`

### POST `/edit`

- **Description**: Renames the file.
- **Redirects**: To the home page (`/`).

## Dependencies

The project uses the following dependencies:

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **ejs**: Embedded JavaScript templates for server-side rendering.
- **path**: Node.js module for working with file and directory paths.
- **fs**: Node.js module for interacting with the file system.

## License

This project is licensed under the MIT License.

---

This README should cover the essential details about your project, from installation to usage. Let me know if you'd like to add anything else!