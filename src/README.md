# Frontend Structure

This React application follows a modular architecture with the following folder structure:

## 📁 Folder Structure

```
src/
├── App.jsx                 # Main application component
├── index.js               # Application entry point
├── index.css              # Global styles
├── assets/                # Static assets (images, icons, fonts)
│   └── index.js
├── components/            # Reusable UI components
│   ├── Chat.jsx
│   ├── LiveCamera.jsx
│   ├── Navbar.jsx
│   ├── ProtectedRoute_Temp.jsx
│   ├── VoiceApp.jsx
│   └── index.js
├── context/               # React Context providers
│   ├── AuthContext.jsx
│   └── index.js
├── hooks/                 # Custom React hooks
│   └── index.js
├── layouts/               # Layout components
│   └── index.js
├── pages/                 # Page components (routes)
│   ├── Analysis.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Results.jsx
│   └── index.js
├── services/              # API calls and external services
│   ├── api.js
│   └── index.js
└── utils/                 # Utility functions
    └── index.js
```

## 🎯 Purpose of Each Folder

- **`assets/`**: Static files like images, icons, fonts, and other media
- **`components/`**: Reusable UI components that can be used across multiple pages
- **`context/`**: React Context providers for global state management
- **`hooks/`**: Custom React hooks for shared logic
- **`layouts/`**: Layout components that wrap pages (e.g., MainLayout, AuthLayout)
- **`pages/`**: Components that represent full pages/routes in the application
- **`services/`**: API calls, external service integrations, and data fetching logic
- **`utils/`**: Helper functions, constants, and utility functions

## 📦 Imports

Each folder has an `index.js` file that exports all components/functions from that folder, making imports cleaner:

```javascript
// Instead of
import Chat from './components/Chat';
import Navbar from './components/Navbar';

// You can use
import { Chat, Navbar } from './components';
```

## 🔧 File Extensions

- **`.jsx`**: For React components
- **`.js`**: For utility functions, services, and configuration files
- **`.css`**: For styling files
