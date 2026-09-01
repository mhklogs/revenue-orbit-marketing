-- Revenue Orbit Marketing : Supabase schema
-- Tables: leads, blogs, team, theme, certificates

create table if not exists public.leads (
  id          text primary key,
  name        text not null,
  email       text not null,
  company     text,
  phone       text,
  service     text,
  message     text,
  status      text not null default 'new',
  consent     boolean not null default false,
  created_at  timestamptz not null default now()
);

create table if not exists public.blogs (
  id          text primary key,
  slug        text not null unique,
  title       text not null,
  category    text default 'General',
  read_time   text,
  excerpt     text,
  body        text,
  created_at  timestamptz not null default now()
);

create table if not exists public.team (
  id          text primary key,
  name        text not null,
  role        text not null,
  bio         text,
  email       text,
  created_at  timestamptz not null default now()
);

create table if not exists public.theme (
  id           text primary key default 'site',
  accent       text not null default '#2EC4B0',
  accent_light text not null default '#5AD6C5',
  accent_dark  text not null default '#0F6B63',
  updated_at   timestamptz not null default now()
);

create table if not exists public.certificates (
  id          text primary key,
  lead_id     text,
  lead_name   text not null,
  industry    text,
  issue_date  text,
  created_at  timestamptz not null default now()
);

-- seed the theme row so reads always return a value
insert into public.theme (id, accent, accent_light, accent_dark)
values ('site', '#2EC4B0', '#5AD6C5', '#0F6B63')
on conflict (id) do nothing;

-- optional RLS: we drive writes via the service role from the server,
-- so keep tables accessible only to service role by default (no anon access).
alter table public.leads        enable row level security;
alter table public.blogs        enable row level security;
alter table public.team         enable row level security;
alter table public.theme        enable row level security;
alter table public.certificates enable row level security;
