// Configuration constants for the application
export const config = {
  telegram: {
    botUsername: 'xdelo_mediabot', // Your bot username
    botApi: '7717223683:AAFsA-TrrkF09eeGubXHPO1uaiJ5ugGVLVw', // Your bot token
    webhookSecret: process.env.TELEGRAM_WEBHOOK_SECRET || 'your-webhook-secret',
  },
  supabase: {
    url: 'https://nxzpjrwdvqbkmlhftsoc.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54enBqcndkdnFia21saGZ0c29jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NzIwNDAsImV4cCI6MjAyNjQ0ODA0MH0.7_h4zXGsQwMfYBEqX4hOQofEqd_gxw8CiWv9ear9Gxo',
  },
  telegram_bot_url: 'https://t.me/xdelo_mediabot',
} as const;