export interface AppIdea {
  title: string;
  description: string;
  target_users: string[];
  core_features: string[];
  tech_stack: string[];
  monetization: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimated_build_time: string;
}
