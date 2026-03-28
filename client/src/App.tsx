import { useIdea } from './hooks/useIdea';
import IdeaCard from './components/IdeaCard';
import IdeaSkeleton from './components/IdeaSkeleton';
import ErrorState from './components/ErrorState';
import GenerateButton from './components/GenerateButton';

function App() {
  const { idea, loading, error, generateIdea } = useIdea();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            StartUP
          </h1>
          <p className="text-sm text-slate-400 sm:text-base">
            AI-powered startup idea generator
          </p>
        </div>

        {/* Main content area */}
        {loading && <IdeaSkeleton />}
        {error && !loading && (
          <ErrorState message={error} onRetry={generateIdea} />
        )}
        {idea && !loading && !error && <IdeaCard idea={idea} />}

        {/* Empty state */}
        {!idea && !loading && !error && (
          <div className="animate-fade-in w-full max-w-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-white">
                Ready to spark your next idea?
              </h2>
              <p className="text-sm text-slate-400">
                Click the button below to generate a unique AI-powered startup
                idea tailored just for you.
              </p>
            </div>
          </div>
        )}

        {/* Generate button */}
        <GenerateButton
          onClick={generateIdea}
          loading={loading}
          hasIdea={!!idea}
        />
      </div>
    </div>
  );
}

export default App;
