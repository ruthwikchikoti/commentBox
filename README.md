# Comment Box

A simple comment box implemented in React, allowing users to add, edit, and delete comments. This project is designed as a reusable component that can be integrated into larger applications.

## Features

### 1. Add Comments

Users can easily add new comments to the comment box. Each comment can include text input and is displayed instantly upon submission. This feature supports:

- Real-time addition of comments without page refresh.
- Handling of input validation, ensuring that empty comments cannot be submitted.

### 2. Edit Comments

The edit feature allows users to modify their previously submitted comments. This includes:

- An "Edit" button next to each comment.
- The ability to update the comment text in an inline editable field.
- Real-time saving of changes, with immediate updates to the comment display.

### 3. Delete Comments

Users can delete comments they no longer wish to keep. The delete feature includes:

- A "Delete" button next to each comment.
- Confirmation prompts to prevent accidental deletions.
- Immediate removal of the comment from the display upon confirmation.

### 4. Simple and Clean UI

The user interface is designed to be straightforward and intuitive, providing a seamless experience. Key aspects include:

- A minimalist design that focuses on functionality.
- Responsive layout, ensuring compatibility with various screen sizes and devices.
- Accessibility features to make the comment box usable for all users, including those with disabilities.

### 5. Reusable Component

The comment box is developed as a reusable React component, meaning it can be easily integrated into other projects. Key benefits include:

- Modular design with clearly defined props and state management.
- Flexibility to customize the appearance and behavior of the comment box through props.
- Easy integration into existing React applications with minimal setup.



## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

    ```bash
    git clone https://github.com/ruthwikchikoti/commentBox.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd commentBox
    ```

3. **Install dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

## Usage

To run the project locally, use the following command:

```bash
npm start
```
This will start the development server, and the application should be accessible at `http://localhost:3000`
