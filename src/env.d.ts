/// <reference types="astro/client" />

interface Window {
    Alpine: import('alpinejs').Alpine;
  }

  interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly OPENAI_API_KEY: string
    readonly EMAIL_ENDPOINT: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }