import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DatabaseSchema {
  members: {
    id: string;
    name: string;
    role: string;
    photo: string;
    bio: string;
    instagram: string;
    created_at?: string;
  };
  programs: {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    order: number;
    created_at?: string;
  };
  activities: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    cover_image: string;
    created_at?: string;
  };
  gallery: {
    id: string;
    activity_id?: string;
    image: string;
    caption: string;
    created_at?: string;
  };
}
