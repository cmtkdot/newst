export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bot_activities: {
        Row: {
          id: string
          event_type: string
          chat_id: number
          user_id: string | null
          message_id: number | null
          details: Json
          created_at: string
        }
        Insert: {
          id?: string
          event_type: string
          chat_id: number
          user_id?: string | null
          message_id?: number | null
          details?: Json
          created_at?: string
        }
        Update: {
          id?: string
          event_type?: string
          chat_id?: number
          user_id?: string | null
          message_id?: number | null
          details?: Json
          created_at?: string
        }
      }
      channels: {
        Row: {
          id: string
          user_id: string
          chat_id: number
          title: string
          username: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          chat_id: number
          title: string
          username?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          chat_id?: number
          title?: string
          username?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      media: {
        Row: {
          id: string
          user_id: string
          chat_id: number | null
          file_name: string
          file_url: string
          media_type: string | null
          caption: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          chat_id?: number | null
          file_name: string
          file_url: string
          media_type?: string | null
          caption?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          chat_id?: number | null
          file_name?: string
          file_url?: string
          media_type?: string | null
          caption?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      media_tags: {
        Row: {
          media_id: string
          tag_id: string
          created_at: string
        }
        Insert: {
          media_id: string
          tag_id: string
          created_at?: string
        }
        Update: {
          media_id?: string
          tag_id?: string
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          user_id: string
          chat_id: number
          message_id: number
          sender_name: string
          text: string | null
          media_type: string | null
          media_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          chat_id: number
          message_id: number
          sender_name: string
          text?: string | null
          media_type?: string | null
          media_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          chat_id?: number
          message_id?: number
          sender_name?: string
          text?: string | null
          media_type?: string | null
          media_url?: string | null
          created_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
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
  }
}