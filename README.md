# Souq - E-Commerce Product Management Platform

<img width="1920" height="2316" alt="Image" src="https://github.com/user-attachments/assets/033e04b7-c4fb-46fe-9850-750f4d34a0b0" />

## Overview

Souq is a full-stack, responsive e-commerce product management platform that allows users to create, edit, and delete products seamlessly. The application features a modern, user-friendly interface with support for both dark and light themes. It is built with a robust tech stack to ensure scalability, performance, and an excellent user experience.

Deployed at: [https://souq-production.up.railway.app/](https://souq-production.up.railway.app/)

## Features

- **Product Management**: Create, edit, and delete products with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dark/Light Theme**: Toggle between dark and light themes for a personalized user experience.
- **State Management**: Efficient state handling with Zustand for smooth front-end interactions.
- **RESTful API**: Backend powered by Node.js and Express for reliable and fast operations.
- **Modern UI**: Built with React and Chakra UI for a sleek, intuitive interface.

## Tech Stack

### Frontend
- **React**: JavaScript library for building dynamic user interfaces.
- **Chakra UI**: Component library for accessible and customizable UI elements.
- **Zustand**: Lightweight state management library for efficient state handling.

### Backend
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Web framework for creating RESTful APIs.

### Deployment
- Hosted on [Railway](https://railway.app/) for seamless deployment and scalability.

## Installation

To run the project locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/souq.git
   cd souq
   ```

2. **Install Dependencies**
   - For the frontend:
     ```bash
     cd client
     npm install
     ```
   - For the backend:
     ```bash
     cd server
     npm install
     ```

3. **Set Up Environment Variables**
   Create a `.env` file in the `server` directory with the following:
   ```env
   PORT=5000
   # Add other environment variables as needed (e.g., database URI)
   ```

4. **Run the Application**
   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:3000` for the frontend. The backend API will be available at `http://localhost:5000`.

## Usage

- **Create a Product**: Navigate to the product creation page, fill in the details (e.g., name, price, description), and submit.
- **Edit a Product**: Select an existing product, modify its details, and save changes.
- **Delete a Product**: Remove a product from the list with a single click.
- **Theme Toggle**: Use the theme toggle button to switch between dark and light modes.
- **Responsive Experience**: Access the platform from any device for a consistent experience.

## Folder Structure

```
souq/
├── client/                 # Frontend (React, Chakra UI, Zustand)
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── store/         # Zustand store for state management
│   │   ├── pages/         # Page components
│   │   └── App.js         # Main React app component
├── server/                 # Backend (Node.js, Express)
│   ├── routes/            # API routes
│   ├── controllers/       # Business logic
│   ├── models/            # Data models (if using a database)
│   └── server.js          # Main Express server
└── README.md              # Project documentation
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out via [GitHub Issues](https://github.com/your-username/souq/issues) or email at your-email@example.com.
