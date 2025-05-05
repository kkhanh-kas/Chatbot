import express from 'express';
import cors from 'cors';
import { ChatService } from './services/chat';

const app = express();
const port = process.env.PORT || 3001;

console.log('Starting server initialization...');

// Initialize chat service
const chatService = new ChatService();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5179',
  methods: ['GET', 'POST'],
  credentials: true
};

console.log('Setting up CORS with options:', corsOptions);
app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('Health check requested');
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Server is running normally'
  });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  console.log('Chat request received:', req.body);
  try {
    const { message } = req.body;
    
    if (!message) {
      console.log('No message provided in request');
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Processing message:', message);
    const response = await chatService.sendMessage(message);
    console.log('Response generated:', response);
    res.json({ response });
  } catch (error: any) {
    console.error('Server Error:', error);
    res.status(500).json({ 
      error: error.message || 'An error occurred while processing your request' 
    });
  }
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server with error handling
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Server initialization complete');
})
.on('error', (error: any) => {
  console.error('Server startup error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please try a different port or close the application using this port.`);
  } else {
    console.error('Failed to start server:', error);
  }
  process.exit(1);
}); 