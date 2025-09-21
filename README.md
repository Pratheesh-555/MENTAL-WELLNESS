# Mental Wellness AI Platform 🧠💚

A comprehensive mental health support platform powered by AI, featuring real-time chat assistance, facial emotion detection, and stress analysis.

## ✨ Features

- **🤖 AI Chat Assistant**: Intelligent mental health support with stress level analysis
- **📷 Facial Emotion Detection**: Real-time emotion recognition through webcam
- **🔐 User Authentication**: Secure login and registration system
- **📊 Analytics Dashboard**: Track your mental wellness journey
- **🎯 Personalized Insights**: AI-powered recommendations and analysis
- **🔊 Voice Features**: Speech-to-text and text-to-speech capabilities

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite for fast development
- **Styling**: TailwindCSS for responsive design
- **Icons**: React Icons for UI elements
- **Routing**: React Router for navigation
- **Animation**: Framer Motion for smooth interactions

### Backend Services
- **Node.js Express**: Handles OpenAI chat and stress analysis (Port 5000)
- **Python FastAPI**: Manages authentication and emotion detection (Port 8000)

### Database
- **MongoDB Atlas**: Cloud database for user management and data storage

### AI Integration
- **OpenAI GPT**: Conversational AI for mental health support
- **Eleven Labs**: Voice synthesis and processing
- **Face Recognition**: Emotion detection from facial expressions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- MongoDB Atlas account
- OpenAI API key
- Eleven Labs API key (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pratheesh-555/MENTAL-WELLNESS.git
   cd MENTAL-WELLNESS
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   # Node.js server dependencies
   cd server
   npm install
   
   # Python server dependencies
   pip install fastapi uvicorn python-multipart pydantic pymongo bcrypt
   cd ..
   ```

4. **Environment Setup**
   
   **Frontend (.env in root folder):**
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```env
   VITE_NODE_SERVER_URL=http://localhost:5000
   VITE_PYTHON_SERVER_URL=http://localhost:8000
   VITE_APP_ENV=development
   ```

   **Backend (server/.env):**
   ```bash
   cp server/.env.example server/.env
   ```
   Edit `server/.env`:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   MONGODB_URI=your_mongodb_connection_string_here
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   NODE_ENV=development
   PYTHON_PORT=8000
   ```

5. **Start the Development Servers**

   **Terminal 1 - Frontend:**
   ```bash
   npm run dev
   # Runs on http://localhost:3000
   ```

   **Terminal 2 - Node.js Backend:**
   ```bash
   cd server
   node server.js
   # Runs on http://localhost:5000
   ```

   **Terminal 3 - Python Backend:**
   ```bash
   cd server
   python -m uvicorn main:app --reload --port 8000
   # Runs on http://localhost:8000
   ```

## 📁 Project Structure

```
MENTAL-WELLNESS/
├── public/                 # Static assets
├── src/                   # Frontend source code
│   ├── components/        # React components
│   │   ├── Chat.jsx      # Chat interface
│   │   ├── LiveCamera.jsx # Emotion detection
│   │   ├── Navbar.jsx    # Navigation
│   │   └── VoiceApp.jsx  # Voice features
│   ├── pages/            # Application pages
│   │   ├── Home.jsx      # Dashboard
│   │   ├── Login.jsx     # Authentication
│   │   ├── Register.jsx  # User registration
│   │   ├── Analysis.jsx  # Emotion analysis
│   │   └── Results.jsx   # Results display
│   ├── context/          # React Context
│   │   └── AuthContext.jsx
│   ├── services/         # API services
│   │   └── api.js        # API calls
│   └── App.jsx           # Main application
├── server/               # Backend services
│   ├── server.js         # Node.js Express server
│   ├── main.py          # Python FastAPI server
│   ├── ai-models/       # AI processing modules
│   └── face_db/         # Face recognition data
└── config files         # Build and development configs
```

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `node server/server.js` - Start Node.js server
- `python -m uvicorn server.main:app --reload --port 8000` - Start Python server

## 🌐 API Endpoints

### Node.js Server (Port 5000)
- `POST /api/send-message` - Send message to AI chatbot with stress analysis

### Python Server (Port 8000)
- `POST /register` - User registration
- `POST /login` - User authentication
- `POST /analyze-emotion` - Facial emotion analysis
- `GET /docs` - Interactive API documentation

## 🛠️ Configuration

### Database Setup
1. Create a MongoDB Atlas cluster
2. Get your connection string
3. Add it to `server/.env` as `MONGODB_URI`

### OpenAI Setup
1. Get your API key from [OpenAI](https://platform.openai.com/)
2. Add it to `server/.env` as `OPENAI_API_KEY`

### Eleven Labs Setup (Optional)
1. Get your API key from [Eleven Labs](https://elevenlabs.io/)
2. Add it to `server/.env` as `ELEVENLABS_API_KEY`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in your hosting platform

### Backend Deployment (Heroku/Railway)
1. Deploy Node.js server to one service
2. Deploy Python server to another service
3. Update frontend environment variables with production URLs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:
1. Check the [Issues](https://github.com/Pratheesh-555/MENTAL-WELLNESS/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🙏 Acknowledgments

- OpenAI for powerful language models
- MongoDB for reliable database service
- React and Vite communities for excellent tooling
- All contributors who help improve mental health support

---

**Made with ❤️ for mental wellness support**

*Remember: This platform is designed to supplement, not replace, professional mental health care. Always consult with qualified healthcare providers for serious mental health concerns.*