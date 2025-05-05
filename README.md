# UEH E-commerce Program Landing Page

A modern, responsive landing page for UEH's E-commerce Program featuring an integrated AI chatbot assistant. The website is designed to provide information about the e-commerce program at UEH (University of Economics Ho Chi Minh City) in Vietnamese.

## Features

- 🎨 Modern, responsive design using HTML5 and CSS3
- 🤖 AI-powered chatbot assistant using Dialogflow
- 🌐 Bilingual support (Vietnamese)
- 📱 Mobile-friendly interface
- 🎯 Program highlights and features section
- 🎓 Educational program information
- 💼 Career opportunities showcase

## Tech Stack

- Frontend:
  - HTML5
  - CSS3 (Custom styling)
  - Google Fonts (Inter)
  - Dialogflow Messenger

- Backend:
  - Express.js
  - Node.js
  - Google Cloud Dialogflow

## Color Scheme

- Primary Color (Teal): `#005f69`
- Secondary Color (Orange): `#f26f33`
- Background: `#f5f5f5`
- White: `#ffffff`

## Project Structure

```
.
├── css/
│   └── styles.css
├── src/
│   └── server/
│       └── dialogflow.ts
├── index.html
└── README.md
```

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Set up Dialogflow:
- Create a Dialogflow agent
- Set up the agent with Vietnamese language support
- Configure intents for e-commerce program queries
- Add your Dialogflow agent ID to the configuration

4. Environment Variables:
Create a `.env` file with the following:
```
DIALOGFLOW_AGENT_ID=your-agent-id
GOOGLE_APPLICATION_CREDENTIALS=path/to/your/credentials.json
```

5. Start the server:
```bash
npm start
```

## Chatbot Features

The integrated Dialogflow chatbot can assist with:
- Program information inquiries
- Admission requirements
- Course details
- Career prospects
- Application process
- Tuition fees
- And more...

## Customization

### Colors
You can modify the color scheme in `css/styles.css`:
```css
:root {
  --primary-color: #005f69;
  --secondary-color: #f26f33;
  --background-color: #f5f5f5;
}
```

### Chatbot Appearance
The chatbot's appearance can be customized through the `df-messenger` element properties in `index.html`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries regarding the UEH E-commerce Program, please visit [UEH Website](https://www.ueh.edu.vn/) or contact through the integrated chatbot on the landing page. 