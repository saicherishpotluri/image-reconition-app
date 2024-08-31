# 🎨 AI Image Recognition with Gemini AI MultiModal Model

Welcome to the **AI Image Recognition** project, where we harness the power of Google’s cutting-edge Gemini AI to blend visual and textual data seamlessly. With this project, you can upload an image and provide a text prompt, then let the Gemini AI model generate insightful responses based on the image and text combination.

## 🚀 Getting Started

### 1. Sign in to Gemini AI
- Visit [gemini.google.com](https://gemini.google.com) and sign in to your account.
- Explore the powerful features of Gemini AI by heading over to the [Gemini API Documentation](https://ai.google.dev/gemini-api/docs).

### 2. Obtain Your Gemini API Key
To start using the Gemini AI model, you'll need to generate an API key:
- Navigate to the API section and create your API key.
- Ensure you store it securely, as you'll need it to interact with the Gemini AI models.

### 3. Understanding the Gemini Models
In this project, we've utilized the **Text/Image AI model** provided by Gemini. This model allows for sophisticated analysis and interaction between images and textual prompts, making it ideal for tasks that require a deep understanding of both modalities.

## 🛠️ Building the Application

This project is powered by a robust tech stack designed to make interaction with the Gemini AI as seamless as possible. Here’s what you need to get started:

### 1. Packages Used
- **cors**: To handle CORS (Cross-Origin Resource Sharing) issues, ensuring smooth communication between the frontend and backend.
- **dotenv**: For managing sensitive data like API keys in a secure manner, separated from the main codebase.
- **express**: A lightweight, fast web framework for handling routing and server management.
- **fs & multer**: Essential for managing file operations, particularly for handling image uploads.

### 2. Setup Instructions

Follow these steps to get the application up and running on your local machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ai-image-recognition.git
   cd ai-image-recognition
2. **Install Dependencies**
   ```bash
   npm install
4. **Create a .env File In the root of your project, create a .env file to store your API key and other sensitive information:**
   ```makefile
   GEMINI_API_KEY=your-api-key-here
6. **Run the Application**
   ```bash
   npm start
8. **Access the Application Open your browser and go to http://localhost:8000 to interact with the app.**

## 🎥 Demo

Check out the demo of the application in action:

![Demo Video](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3E5ZHZiOXFxdmJjMTVzdnc4a2c3c3dwZmE0YzhtMm5jYTU0a2I5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3l77V2txOJaV2hTN6q/giphy.gif)

## 🎯 Project Overview

This project is designed to demonstrate the capabilities of the Gemini AI model in processing and understanding multimodal data—specifically, how images and text can be used together to generate meaningful AI-driven insights.

### Features:
- **Image Upload**: Users can upload any image they wish to analyze.
- **Text Prompts**: Alongside the image, users provide a textual prompt to guide the AI in generating a response.
- **AI Interaction**: The AI model processes the image and text, providing a coherent response that bridges both modalities.

## 🌟 Why Gemini AI?

Gemini AI is a revolutionary platform that excels in understanding and generating human-like responses from complex data inputs. Its Text/Image model is particularly well-suited for applications requiring deep contextual understanding, making it perfect for tasks in computer vision, NLP, and beyond.

## 📬 Feedback and Contributions

We welcome feedback and contributions! Whether it's a bug report, a new feature request, or a pull request, feel free to get involved.

## 🙏 Credits

This project was inspired by the learning resources from **FreeCodeCamp** and **Ania Kubów**. Special thanks to Ania Kubów for her incredible course, which served as the foundation for this project. You can watch the original course video below:

[![Watch the video](https://img.youtube.com/vi/vXjOywyMBN8/maxresdefault.jpg)](https://www.youtube.com/watch?v=vXjOywyMBN8)

