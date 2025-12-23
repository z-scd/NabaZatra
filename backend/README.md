# Medical RAG Application Backend

A Retrieval-Augmented Generation (RAG) application for medical students, built with FastAPI, FAISS, and OpenRouter.

## Features

- 📄 Document upload and processing (PDF, TXT, MD)
- 🔍 Semantic search using FAISS vector database
- 🤖 AI-powered answers via OpenRouter
- 📚 Context-aware responses for medical queries
- 🎯 Built specifically for medical education

## Project Structure

```
medical-rag/
├── main.py                      # FastAPI application entry point
├── models/
│   └── schemas.py              # Pydantic models
├── services/
│   ├── document_processor.py   # Document processing logic
│   ├── vector_store.py         # FAISS vector database
│   └── llm_service.py          # OpenRouter LLM integration
├── data/
│   ├── documents/              # Uploaded documents
│   └── faiss_index/            # FAISS index and metadata
├── requirements.txt            # Python dependencies
├── .env                        # Environment variables (create this)
└── README.md                   # This file
```

## Installation

### Prerequisites

- Python 3.14
- OpenRouter API key ([Get one here](https://openrouter.ai/))

### Setup Steps

1. **Clone or create the project directory:**

```bash
# Using a POSIX shell (macOS / Linux / WSL)
mkdir -p medical-rag && cd medical-rag

# On Windows (cmd.exe / PowerShell), create the folder and change directory:
mkdir medical-rag
cd medical-rag
```

1. **Create the directory structure:**

```bash
# POSIX (macOS / Linux / WSL)
mkdir -p models services data/documents data/faiss_index

# Windows (PowerShell)
New-Item -ItemType Directory -Path models, services, data\documents, data\faiss_index -Force

# Windows (cmd.exe)
md models services data\documents data\faiss_index
```

1. **Create all Python files** with the code provided above.

2. **Create a virtual environment:**

```bash
python -m venv venv

# Activate the virtual environment
# On macOS / Linux / WSL:
source venv/bin/activate

# On Windows (cmd.exe):
venv\Scripts\activate.bat

# On Windows (PowerShell):
venv\Scripts\Activate.ps1
```

1. **Install dependencies:**

```bash
pip install -r requirements.txt
```

1. **Set up environment variables:**

```bash
# Copy the example env file
# On POSIX:
cp .env.example .env

# On Windows (cmd.exe):
copy .env.example .env

# On Windows (PowerShell):
Copy-Item .env.example .env

# Edit .env and add your OpenRouter API key:
# OPENROUTER_API_KEY=your_actual_api_key_here
```

1. **Create `__init__.py` files:**

```bash
# POSIX:
touch models/__init__.py services/__init__.py

# Windows (cmd.exe / PowerShell):
type NUL > models\__init__.py
type NUL > services\__init__.py
```

## Running the Application

Start the server:

```bash
python main.py
```

Or with uvicorn directly:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

Once running, visit:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## API Endpoints

### Health Check

```
GET /
```

### Upload Document

```
POST /upload
Content-Type: multipart/form-data

file: <your-document.pdf>
```

### Query Documents

```
POST /query
Content-Type: application/json

{
  "query": "What are the symptoms of diabetes?",
  "top_k": 5,
  "system_prompt": "Optional custom prompt"
}
```

### List Documents

```
GET /documents
```

### Delete Document

```
DELETE /documents/{filename}
```

### Rebuild Index

```
POST /rebuild-index
```

## Usage Examples

### Using cURL

**Upload a document:**

```bash
curl -X POST "http://localhost:8000/upload" \
  -H "Content-Type: multipart/form-data" \
  -F "file=@medical_textbook.pdf"
```

**Query the system:**

```bash
curl -X POST "http://localhost:8000/query" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "Explain the pathophysiology of type 2 diabetes",
    "top_k": 5
  }'
```

### Using Python

```python
import requests

# Upload document
with open("medical_notes.pdf", "rb") as f:
    response = requests.post(
        "http://localhost:8000/upload",
        files={"file": f}
    )
    print(response.json())

# Query
response = requests.post(
    "http://localhost:8000/query",
    json={
        "query": "What is hypertension?",
        "top_k": 5
    }
)
print(response.json())
```

## Configuration

### Environment Variables

- `OPENROUTER_API_KEY`: Your OpenRouter API key (required)
- `OPENROUTER_MODEL`: Model to use (default: anthropic/claude-3.5-sonnet)
- `HOST`: Server host (default: 0.0.0.0)
- `PORT`: Server port (default: 8000)

### Customization

**Adjust chunk size** in `services/document_processor.py`:

```python
DocumentProcessor(chunk_size=1000, chunk_overlap=200)
```

**Change embedding model** in `services/vector_store.py`:

```python
VectorStore(model_name="all-MiniLM-L6-v2")
```

**Modify system prompt** in `services/llm_service.py` to customize AI behavior

## Troubleshooting

### Common Issues

1. **"OPENROUTER_API_KEY environment variable not set"**

   - Make sure you created a `.env` file with your API key
   - Load it using `python-dotenv` or export it in your shell

2. **FAISS import errors**

   - Make sure you installed `faiss-cpu` not `faiss-gpu` (unless you have GPU support)
   - Try: `pip install --force-reinstall faiss-cpu`

3. **PDF extraction issues**

   - Some PDFs are scanned images and won't extract text
   - Consider using OCR tools like pytesseract for such files

4. **Memory issues with large documents**
   - Reduce `chunk_size` in DocumentProcessor
   - Process documents in smaller batches

## Performance Tips

- The first document upload will download the embedding model (~90MB)
- Embeddings are cached automatically by sentence-transformers
- FAISS index is saved to disk and loaded on startup
- For production, consider using FAISS IVF indices for larger datasets

## Security Notes

- Never commit your `.env` file or API keys
- Add `.env` to `.gitignore`
- Consider implementing authentication for production use
- Validate and sanitize all file uploads

## Future Enhancements

- [ ] Add authentication and user management
- [ ] Implement document versioning
- [ ] Add support for more document formats (DOCX, HTML)
- [ ] Streaming responses for real-time answers
- [ ] Advanced FAISS indices for scalability
- [ ] Query history and analytics
- [ ] Multi-language support

## License

MIT

## Support

For issues or questions, please open an issue on the project repository.
