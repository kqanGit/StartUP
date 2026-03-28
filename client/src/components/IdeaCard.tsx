import type { AppIdea } from '../types/idea';

const difficultyConfig = {
  easy: {
    label: 'Easy',
    colors: 'bg-emerald-500/15 text-emerald-400 ring-emerald-500/30',
    glow: 'shadow-emerald-500/20',
  },
  medium: {
    label: 'Medium',
    colors: 'bg-amber-500/15 text-amber-400 ring-amber-500/30',
    glow: 'shadow-amber-500/20',
  },
  hard: {
    label: 'Hard',
    colors: 'bg-rose-500/15 text-rose-400 ring-rose-500/30',
    glow: 'shadow-rose-500/20',
  },
};

interface IdeaCardProps {
  idea: AppIdea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  const diff = difficultyConfig[idea.difficulty];

  return (
    <div className="animate-fade-in w-full max-w-2xl">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
        {/* Gradient accent line */}
        <div className="absolute top-0 left-1/2 h-1 w-32 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <h1 className="text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">
            {idea.title}
          </h1>
          <span
            className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${diff.colors} shadow-lg ${diff.glow}`}
          >
            {diff.label}
          </span>
        </div>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-slate-300">{idea.description}</p>

        {/* Sections grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Section icon="👥" title="Target Users" items={idea.target_users} />
          <Section icon="⚡" title="Core Features" items={idea.core_features} />
          <Section icon="🛠️" title="Tech Stack" items={idea.tech_stack} />
          <Section icon="💰" title="Monetization">
            <p className="text-sm text-slate-300">{idea.monetization}</p>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-3">
          <span className="text-lg">⏱️</span>
          <span className="text-sm font-medium text-slate-300">
            Estimated Build Time:
          </span>
          <span className="text-sm font-semibold text-white">
            {idea.estimated_build_time}
          </span>
        </div>
      </div>
    </div>
  );
}

interface SectionProps {
  icon: string;
  title: string;
  items?: string[];
  children?: React.ReactNode;
}

function Section({ icon, title, items, children }: SectionProps) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide text-slate-200 uppercase">
        <span>{icon}</span>
        {title}
      </h3>
      {items ? (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
}
