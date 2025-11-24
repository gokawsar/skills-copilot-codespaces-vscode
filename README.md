# Skills Copilot Codespaces VSCode

A demo web application built with Node.js and Express to showcase modern web development practices.

## 🚀 Features

- **Express.js Server**: Lightweight web server with RESTful API endpoints
- **Interactive Frontend**: Modern, responsive UI with HTML, CSS, and JavaScript
- **API Endpoints**: 
  - Greeting generator
  - Factorial calculator
- **Clean Code**: Well-structured and documented code

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/gokawsar/skills-copilot-codespaces-vscode.git
cd skills-copilot-codespaces-vscode
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
.
├── server.js           # Express server and API routes
├── public/             # Frontend files
│   ├── index.html      # Main HTML page
│   ├── styles.css      # Styles
│   └── app.js          # Client-side JavaScript
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 🔌 API Endpoints

### GET `/api/greet/:name`
Returns a personalized greeting message.

**Example:**
```bash
curl http://localhost:3000/api/greet/John
```

**Response:**
```json
{
  "message": "Hello, John! Welcome to the demo project."
}
```

### GET `/api/factorial/:number`
Calculates the factorial of a given number.

**Example:**
```bash
curl http://localhost:3000/api/factorial/5
```

**Response:**
```json
{
  "number": 5,
  "factorial": 120
}
```

## 💻 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Try the **Greeting Generator**: Enter your name and click "Greet Me"
3. Try the **Factorial Calculator**: Enter a number and click "Calculate"

## 🌟 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Responsive CSS with gradients and animations

## 📝 License

ISC

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

