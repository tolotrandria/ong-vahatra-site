# Supabase Setup

This project is prepared for Supabase through the contact form.

## 1. Create the table

In Supabase, open the SQL Editor and run:

```sql
-- See the full script in supabase/schema.sql
```

Use the complete script from `supabase/schema.sql`.

## 2. Add environment variables

In Vercel, open the project settings, then Environment Variables, and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-or-publishable-key
```

Supabase's newer docs may call the public key a publishable key. This project accepts either:

```env
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

## 3. Redeploy Vercel

After adding the variables, redeploy the Vercel project. The contact form will then insert rows into `contact_messages`.

## 4. Current database scope

The first Supabase feature is intentionally small:

- store contact form submissions
- keep Row Level Security enabled
- allow anonymous inserts only
- keep reads blocked until a real admin area is designed

Future database tables can support news, impact metrics, partners, gallery media, and an admin area.
