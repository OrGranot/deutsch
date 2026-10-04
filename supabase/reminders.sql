-- Daily reminder from Lehrer. Run once in the Supabase SQL editor (Or's project), then create the
-- "erinnerung" function from supabase/functions/erinnerung/index.ts.

-- Each device that turned reminders on: its push subscription, the chosen time and time zone.
create table if not exists public.push_subs (
  endpoint text primary key,
  user_id uuid not null references auth.users on delete cascade,
  sub jsonb not null,
  remind_at text not null default '19:00',
  tz text not null default 'Europe/Berlin',
  app_url text,
  last_sent date,
  created_at timestamptz not null default now()
);
-- The push keys, made by the function on first use.
create table if not exists public.push_keys (
  id int primary key default 1,
  public_key text not null,
  private_jwk jsonb not null
);
-- Row-level security with no policies: only the function (service role) can read or write these.
alter table public.push_subs enable row level security;
alter table public.push_keys enable row level security;

-- Every 15 minutes, ask the function whether a reminder is due. It sends at most one a day,
-- after the chosen time, and only when today's lesson isn't done yet.
create extension if not exists pg_cron;
create extension if not exists pg_net;
select cron.unschedule('erinnerung') where exists (select 1 from cron.job where jobname = 'erinnerung');
select cron.schedule('erinnerung', '*/15 * * * *', $$
  select net.http_post(
    url := 'https://zokhkrmdcwmdkojmvuxd.supabase.co/functions/v1/erinnerung',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpva2hrcm1kY3dtZGtvam12dXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMTE1MzgsImV4cCI6MjEwNjU4NzUzOH0.AvIyxRGUZZ-QYEHIo_KNW06uY2oVrX3lLzJiTuzyy3o'
    ),
    body := '{"action":"tick"}'::jsonb
  );
$$);
