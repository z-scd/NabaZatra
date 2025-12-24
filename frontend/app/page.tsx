import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Medical RAG
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            AI-Powered Study Assistant for Medical Students
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            href="/query"
            className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Ask Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Query your medical documents and get AI-powered answers with sources
            </p>
          </Link>

          <Link 
            href="/documents"
            className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Manage Documents
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Upload, view, and manage your medical textbooks and study materials
            </p>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white dark:bg-slate-800 rounded-xl shadow-md px-6 py-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Powered by FastAPI, FAISS, and OpenRouter AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}