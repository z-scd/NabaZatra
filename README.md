# নবযাত্রা - AI Powered Medical Education Assistant

A comprehensive Retrieval-Augmented Generation (RAG) application designed for medical students to query and study from medical documents. This project combines a high-performance FastAPI backend with a modern Next.js frontend to provide accurate, evidence-based answers with source citations.

## 🚀 Features

- **Document Management**: Upload and manage PDF medical textbooks and study materials.
- **Intelligent Querying**: Ask natural language questions about your uploaded documents.
- **Evidence-Based Answers**: Responses are generated using RAG, ensuring answers are grounded in your provided documents.
- **Source Citations**: Every answer includes references to the specific document chunks used to generate the response.
- **Modern UI**: A clean, responsive interface built with Next.js and Tailwind CSS.

## 🛠️ Tech Stack

### Backend

- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) - High-performance Python web API.
- **Vector Store**: [FAISS](https://github.com/facebookresearch/faiss) - Efficient similarity search and clustering of dense vectors.
- **Embeddings**: `sentence-transformers` (all-MiniLM-L6-v2) - For creating semantic vector embeddings of text.
- **LLM Integration**: OpenRouter API (Access to models like GPT-4, Claude, Llama, etc.).
- **Document Processing**: PyPDF2 and custom chunking logic.

### Frontend

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) - React framework for production.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- **Markdown Rendering**: `react-markdown` - For rendering formatted AI responses.
- **Language**: TypeScript - For type-safe code.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python** (3.8 or higher)
- **Node.js** (18.0 or higher) and **npm**
- **OpenRouter API Key**: You'll need an API key from [OpenRouter](https://openrouter.ai/) to power the LLM.

## ⚡ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MedRAG
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Configure Environment Variables:

1.  Copy `.env.example` to `.env`.
2.  Add your OpenRouter API key.

```bash
# .env file content
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-oss-120b:free  # or any other supported model
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Application

### Start the Backend Server

In your backend terminal (with virtual environment activated):

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`. You can view the API documentation at `http://localhost:8000/docs`.

### Start the Frontend Development Server

In your frontend terminal:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 📖 Usage Guide

1.  **Upload Documents**:

    - Go to the "Manage Documents" section.
    - Upload your medical PDF files.
    - The system will automatically process and index them (this may take a moment).

2.  **Ask Questions**:
    - Go to the "Ask Questions" section.
    - Type your medical query (e.g., "What are the clinical manifestations of Type 2 Diabetes?").
    - The AI will analyze your documents and provide a detailed answer with sources.

## 📂 Project Structure

```
MedRAG/
├── backend/                # Python FastAPI Backend
│   ├── data/               # Storage for uploaded docs and FAISS index
│   ├── models/             # Pydantic data models
│   ├── services/           # Core logic (LLM, Vector Store, Doc Processor)
│   ├── main.py             # API Entry point
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # Next.js Frontend
    ├── app/                # App Router pages (documents, query)
    ├── public/             # Static assets
    └── package.json        # Node.js dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
