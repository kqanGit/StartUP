import { useState } from 'react';
import type { AppIdea } from '../types/idea';

interface UseIdeaReturn {
  idea: AppIdea | null;
  loading: boolean;
  error: string | null;
  generateIdea: () => Promise<void>;
}

export function useIdea(): UseIdeaReturn {
  const [idea, setIdea] = useState<AppIdea | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateIdea = async () => {
    setLoading(true);
    setError(null);

    try {
      const categories = ['health', 'finance', 'education', 'social', 'productivity', 'entertainment', 'ecommerce', 'ai'];
      const difficulties = ['easy', 'medium', 'hard'];
      const platforms = ['web', 'mobile', 'desktop', 'cross-platform'];

      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
      const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];

      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: randomCategory,
          difficulty: randomDifficulty,
          platform: randomPlatform,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Server error (${response.status})`);
      }

      const data: AppIdea = await response.json();
      setIdea(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { idea, loading, error, generateIdea };
}
