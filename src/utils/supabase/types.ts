import { SupabaseClient } from "@supabase/supabase-js"

// Main Supabase client
type Json = Json[] | boolean | number | string | { [key: string]: Json | undefined } | null

type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          candidate_id: string
          created_at: string
          id: string
          job_id: string
          other_requirements: Json | null
        }
        Insert: {
          candidate_id: string
          created_at?: string
          id?: string
          job_id: string
          other_requirements?: Json | null
        }
        Update: {
          candidate_id?: string
          created_at?: string
          id?: string
          job_id?: string
          other_requirements?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'applications_candidate_id_fkey'
            columns: ['candidate_id']
            referencedRelation: 'candidates'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'applications_job_id_fkey'
            columns: ['job_id']
            referencedRelation: 'jobs'
            referencedColumns: ['id']
          },
        ]
      }
      candidates: {
        Row: {
          accepted_terms: boolean
          address: string | null
          best_skills: string
          birthdate: string | null
          can_relocate: boolean | null
          country: string
          created_at: string
          education_level: Database['public']['Enums']['education_level']
          education_status: Database['public']['Enums']['education_status']
          email: string
          experience_level: Database['public']['Enums']['experience_level']
          first_name: string
          id: string
          identification_number: string
          identification_type: Database['public']['Enums']['identification_type']
          languages: string[]
          last_name: string
          locality: string | null
          phone: number | null
          professional_profile: string | null
          profile_picture: string | null
          state: string | null
          why_hire_you: string
        }
        Insert: {
          accepted_terms: boolean
          address?: string | null
          best_skills: string
          birthdate?: string | null
          can_relocate?: boolean | null
          country: string
          created_at?: string
          education_level: Database['public']['Enums']['education_level']
          education_status: Database['public']['Enums']['education_status']
          email: string
          experience_level: Database['public']['Enums']['experience_level']
          first_name: string
          id?: string
          identification_number: string
          identification_type: Database['public']['Enums']['identification_type']
          languages: string[]
          last_name: string
          locality?: string | null
          phone?: number | null
          professional_profile?: string | null
          profile_picture?: string | null
          state?: string | null
          why_hire_you: string
        }
        Update: {
          accepted_terms?: boolean
          address?: string | null
          best_skills?: string
          birthdate?: string | null
          can_relocate?: boolean | null
          country?: string
          created_at?: string
          education_level?: Database['public']['Enums']['education_level']
          education_status?: Database['public']['Enums']['education_status']
          email?: string
          experience_level?: Database['public']['Enums']['experience_level']
          first_name?: string
          id?: string
          identification_number?: string
          identification_type?: Database['public']['Enums']['identification_type']
          languages?: string[]
          last_name?: string
          locality?: string | null
          phone?: number | null
          professional_profile?: string | null
          profile_picture?: string | null
          state?: string | null
          why_hire_you?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo: string | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo?: string | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo?: string | null
          name?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          company_id: string
          created_at: string
          description: string | null
          id: string
          other_requirements: Json | null
          salary: number | null
          title: string
          visibility: Database['public']['Enums']['visibility']
        }
        Insert: {
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          other_requirements?: Json | null
          salary?: number | null
          title: string
          visibility: Database['public']['Enums']['visibility']
        }
        Update: {
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          other_requirements?: Json | null
          salary?: number | null
          title?: string
          visibility?: Database['public']['Enums']['visibility']
        }
        Relationships: [
          {
            foreignKeyName: 'jobs_company_id_fkey'
            columns: ['company_id']
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      education_level: 'postgraduate' | 'primary' | 'secondary' | 'tertiary' | 'university'
      education_status: 'complete' | 'in_progress' | 'incomplete'
      experience_level:
        | 'can_do_alone'
        | 'can_do_with_help'
        | 'can_train_others'
        | 'have_trained_others'
        | 'need_to_be_taught'
      identification_type: 'dni' | 'other' | 'passport'
      skill_level: 'advanced' | 'basic' | 'intermediate'
      visibility: 'private' | 'public'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Buckets
type Bucket = 'profile-pictures' | 'resumes'

// Utility types
type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

type WithSupabase<T> = T & { supabase: SupabaseClient<Database> }

export type { Database, Enums, Json, Tables, Bucket, WithSupabase }
