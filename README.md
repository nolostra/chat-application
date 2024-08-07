
# **Chat Application**
This is a Next.js project bootstrapped with create-next-app. This project implements a real-time chat application using Socket.io for live messaging.

🚀 Getting Started
To start the development server, run:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser to view the chat application.

🌟 Features
Real-Time Messaging: Send and receive messages instantly with Socket.io, ensuring seamless communication.
Username Management: Users must set a username before they can participate in the chat, adding a personal touch to interactions.
Message Alignment: Messages are displayed based on the sender. Current user messages are aligned to the right, while messages from others are aligned to the left for clear differentiation.
Responsive Design: The chat interface is styled with Tailwind CSS, ensuring a polished look and feel across various screen sizes and devices.

📁 Project Structure
app/page.tsx: The main page component where the chat interface is rendered. This is the entry point for the chat UI.
components/ChatComponent.tsx: Contains the chat UI and logic for handling messages and user input. Central to the chat functionality.
server.js: Sets up the server with Next.js and Socket.io to handle real-time messaging and ensure smooth server-client communication.

✨ Development
To start editing the application:

Modify files in the app and components directories.
The page will auto-update as you make changes, allowing for rapid development and testing.

🌐 Fonts
This project uses next/font to automatically optimize and load Inter, a custom Google Font, enhancing the overall typography and user experience.

📚 Learn More
To deepen your knowledge of Next.js, check out these resources:

Next.js Documentation - Discover Next.js features and API.
Learn Next.js - An interactive tutorial to get you up to speed with Next.js.
For contributions and feedback, visit the Next.js GitHub repository.

🚀 Deploy on Vercel
Deploy your Next.js app effortlessly using the Vercel Platform. For detailed deployment instructions, refer to our Next.js deployment documentation.
