create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  organization text not null check (char_length(organization) between 2 and 160),
  message text not null check (char_length(message) between 20 and 3000),
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'read', 'archived')),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
on public.contact_messages
for insert
to anon
with check (
  source = 'website'
  and status = 'new'
);

create index if not exists contact_messages_created_at_idx
on public.contact_messages (created_at desc);
