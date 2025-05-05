import express from 'express';
import { SessionsClient } from '@google-cloud/dialogflow';

const router = express.Router();
const sessionsClient = new SessionsClient();

router.post('/api/dialogflow', async (req, res) => {
  try {
    const { message, agentId, languageCode } = req.body;
    
    const sessionPath = sessionsClient.projectAgentSessionPath(
      agentId,
      'unique-session-id' // You might want to make this dynamic per user
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: languageCode,
        },
      },
    };

    const responses = await sessionsClient.detectIntent(request);
    const result = responses[0].queryResult;

    if (result && result.fulfillmentText) {
      res.json({ response: result.fulfillmentText });
    } else {
      res.status(400).json({ error: 'No response from chatbot' });
    }
  } catch (error) {
    console.error('Error in Dialogflow API:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

export default router; 