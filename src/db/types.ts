import { PostgrestError, SupabaseClient } from '@supabase/supabase-js'

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

type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never

// Buckets
type Bucket = 'company-logos' | 'profile-pictures' | 'resumes'

// Utility types
type WithSupabase<T> = T & { supabase: SupabaseClient<Database> }

type DbResult<T> = T extends PromiseLike<infer U> ? U : never
type DbResultOk<T> = T extends PromiseLike<{ data: infer U }> ? Exclude<U, null> : never
type DbResultErr = PostgrestError

export type {
  Bucket,
  Database,
  DbResult,
  DbResultErr,
  DbResultOk,
  Enums,
  Json,
  Tables,
  TablesInsert,
  TablesUpdate,
  WithSupabase,
}
