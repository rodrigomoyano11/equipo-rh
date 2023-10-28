type Json = Json[] | boolean | number | string | { [key: string]: Json | undefined } | null

type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          accepted_terms: boolean
          address: string | null
          best_skills: string
          birthdate: string | null
          can_relocate: boolean | null
          country: string
          created_at: string
          education_level: string
          education_status: string
          email: string
          first_name: string
          id: string
          identification_number: string
          identification_type: string
          languages: string[]
          last_name: string
          locality: string | null
          phone: number | null
          professional_profile: string | null
          profile_picture: string | null
          skills_experience_level: string
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
          education_level: string
          education_status: string
          email: string
          first_name: string
          id?: string
          identification_number: string
          identification_type: string
          languages: string[]
          last_name: string
          locality?: string | null
          phone?: number | null
          professional_profile?: string | null
          profile_picture?: string | null
          skills_experience_level: string
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
          education_level?: string
          education_status?: string
          email?: string
          first_name?: string
          id?: string
          identification_number?: string
          identification_type?: string
          languages?: string[]
          last_name?: string
          locality?: string | null
          phone?: number | null
          professional_profile?: string | null
          profile_picture?: string | null
          skills_experience_level?: string
          state?: string | null
          why_hire_you?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type { Database, Json }
