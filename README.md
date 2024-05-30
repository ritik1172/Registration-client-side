# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



This command will start the development server for the client-side application and open it in your default web browser.

## Scripts

- Server:
- `npm run dev`: Starts the server.

- Client:
- `npm run dev`: Starts the development server for the client.
- `npm run build`: Builds the production-ready bundle for deployment.
- `npm run test`: Runs tests.
- `npm run eject`: Ejects the project from create-react-app, allowing custom configurations (use with caution).

## Folder Structure

- **server**: Contains the server-side code.
- **client**: Contains the client-side code.

## Dependencies

- Server:
- Express.js: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- bcryptjs: Library for hashing passwords
- jsonwebtoken (JWT): Authentication via JSON Web Tokens
- nodemailer: Email sending library for sending reset password emails
- dotenv: Loads environment variables from a .env file

- Client:
- React: Frontend JavaScript library for building user interfaces.
- React Router: Routing library for managing navigation in React applications.
- Axios: HTTP client for making API requests.
- dotenv: Loads environment variables from a .env file.
- Other dependencies as per your project requirements.

## Contributing

Feel free to contribute by submitting pull requests or raising issues for any bugs or improvements.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
