const DIALOGFLOW_AGENT_ID = '80db7ea8-5c14-4ee3-a5f0-7b36a558024c';

export async function sendMessageToDialogflow(message: string) {
  try {
    const response = await fetch(`/api/dialogflow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agentId: DIALOGFLOW_AGENT_ID,
        message,
        languageCode: 'vi'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from chatbot');
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending message to Dialogflow:', error);
    throw error;
  }
} 