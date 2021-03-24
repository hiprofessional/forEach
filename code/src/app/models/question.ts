export interface Question {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  answer_count: number;
  question_id: number;
  title: string;
  body?: string;
}

export interface SearchData<T> {
  items: T[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Owner {
  user_id: number;
  display_name: string;
  profile_image: string;
}
export interface Answer {
  owner: Owner;
  is_accepted: boolean;
  answer_id: number;
  question_id: number;
  body?: string;
}