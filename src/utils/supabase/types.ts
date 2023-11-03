import { SupabaseClient } from '@supabase/supabase-js'

// Main Supabase client
type Json = Json[] | boolean | number | string | { [key: string]: Json | undefined } | null

type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          candidateId: string
          createdAt: string
          id: string
          jobId: string
          otherRequirements: Json | null
        }
        Insert: {
          candidateId: string
          createdAt?: string
          id?: string
          jobId: string
          otherRequirements?: Json | null
        }
        Update: {
          candidateId?: string
          createdAt?: string
          id?: string
          jobId?: string
          otherRequirements?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'applications_candidateId_fkey'
            columns: ['candidateId']
            isOneToOne: false
            referencedRelation: 'candidates'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'applications_jobId_fkey'
            columns: ['jobId']
            isOneToOne: false
            referencedRelation: 'jobs'
            referencedColumns: ['id']
          },
        ]
      }
      candidates: {
        Row: {
          acceptedTerms: boolean
          address: string | null
          bestSkills: string
          birthdate: string | null
          canRelocate: boolean | null
          country: string
          createdAt: string
          educationLevel: Database['public']['Enums']['educationLevel']
          educationStatus: Database['public']['Enums']['educationStatus']
          email: string
          experienceLevel: Database['public']['Enums']['experienceLevel']
          firstName: string
          id: string
          identificationNumber: string
          identificationType: Database['public']['Enums']['identificationType']
          languages: string[]
          lastName: string
          locality: string | null
          phone: number | null
          professionalProfile: string | null
          profilePicture: string | null
          resume: string | null
          state: string | null
          whyHireYou: string
        }
        Insert: {
          acceptedTerms: boolean
          address?: string | null
          bestSkills: string
          birthdate?: string | null
          canRelocate?: boolean | null
          country: string
          createdAt?: string
          educationLevel: Database['public']['Enums']['educationLevel']
          educationStatus: Database['public']['Enums']['educationStatus']
          email: string
          experienceLevel: Database['public']['Enums']['experienceLevel']
          firstName: string
          id?: string
          identificationNumber: string
          identificationType: Database['public']['Enums']['identificationType']
          languages: string[]
          lastName: string
          locality?: string | null
          phone?: number | null
          professionalProfile?: string | null
          profilePicture?: string | null
          resume?: string | null
          state?: string | null
          whyHireYou: string
        }
        Update: {
          acceptedTerms?: boolean
          address?: string | null
          bestSkills?: string
          birthdate?: string | null
          canRelocate?: boolean | null
          country?: string
          createdAt?: string
          educationLevel?: Database['public']['Enums']['educationLevel']
          educationStatus?: Database['public']['Enums']['educationStatus']
          email?: string
          experienceLevel?: Database['public']['Enums']['experienceLevel']
          firstName?: string
          id?: string
          identificationNumber?: string
          identificationType?: Database['public']['Enums']['identificationType']
          languages?: string[]
          lastName?: string
          locality?: string | null
          phone?: number | null
          professionalProfile?: string | null
          profilePicture?: string | null
          resume?: string | null
          state?: string | null
          whyHireYou?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          logo: string | null
          name: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id?: string
          logo?: string | null
          name: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          logo?: string | null
          name?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          companyId: string
          createdAt: string
          description: string | null
          id: string
          otherRequirements: Json | null
          salary: number | null
          title: string
          visibility: Database['public']['Enums']['visibility']
        }
        Insert: {
          companyId: string
          createdAt?: string
          description?: string | null
          id?: string
          otherRequirements?: Json | null
          salary?: number | null
          title: string
          visibility: Database['public']['Enums']['visibility']
        }
        Update: {
          companyId?: string
          createdAt?: string
          description?: string | null
          id?: string
          otherRequirements?: Json | null
          salary?: number | null
          title?: string
          visibility?: Database['public']['Enums']['visibility']
        }
        Relationships: [
          {
            foreignKeyName: 'jobs_companyId_fkey'
            columns: ['companyId']
            isOneToOne: false
            referencedRelation: 'companies'
            referencedColumns: ['id']
          },
        ]
      }
      savedJobs: {
        Row: {
          candidateId: string
          createdAt: string
          id: string
          jobId: string
        }
        Insert: {
          candidateId: string
          createdAt?: string
          id?: string
          jobId: string
        }
        Update: {
          candidateId?: string
          createdAt?: string
          id?: string
          jobId?: string
        }
        Relationships: [
          {
            foreignKeyName: 'savedJobs_candidateId_fkey'
            columns: ['candidateId']
            isOneToOne: false
            referencedRelation: 'candidates'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'savedJobs_jobId_fkey'
            columns: ['jobId']
            isOneToOne: false
            referencedRelation: 'jobs'
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
      educationLevel: 'postgraduate' | 'primary' | 'secondary' | 'tertiary' | 'university'
      educationStatus: 'complete' | 'incomplete' | 'inProgress'
      experienceLevel:
        | 'canDoAlone'
        | 'canDoWithHelp'
        | 'canTrainOthers'
        | 'haveTrainedOthers'
        | 'needToBeTaught'
      identificationType: 'dni' | 'other' | 'passport'
      skillLevel: 'advanced' | 'basic' | 'intermediate'
      visibility: 'private' | 'public'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Buckets
type Bucket = 'company-logos' | 'profile-pictures' | 'resumes'

// Utility types
type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

type DbInsert<T extends keyof Database['public']['Tables']> = Omit<
  Database['public']['Tables'][T]['Insert'],
  'createdAt' | 'id'
>

type DbUpdate<T extends keyof Database['public']['Tables']> = Omit<
  Database['public']['Tables'][T]['Update'],
  'createdAt' | 'id'
>

type WithSupabase<T> = T & { supabase: SupabaseClient<Database> }

export type { Bucket, Database, DbInsert, DbUpdate, Enums, Json, Tables, WithSupabase }
