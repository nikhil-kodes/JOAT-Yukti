-- Create registrations table
create sequence registrations_seq start 1;

create table registrations (
  id                uuid primary key default gen_random_uuid(),
  participant_id    text unique not null,
  full_name         text not null,
  college_email     text not null,
  phone_number      text not null,
  roll_number       text not null,
  branch            text not null,
  year              text not null,
  section           text,
  programming_experience text not null,
  preferred_language text not null,
  github_url        text,
  consent_given     boolean not null default false,
  status            text not null default 'pending',
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),

  constraint registrations_email_unique unique (college_email),
  constraint registrations_roll_unique unique (roll_number)
);

create index idx_registrations_status on registrations (status);
create index idx_registrations_branch on registrations (branch);
create index idx_registrations_year on registrations (year);
create index idx_registrations_created_at on registrations (created_at);

-- Create admins table
create table admins (
  id             uuid primary key default gen_random_uuid(),
  email          text unique not null,
  password_hash  text not null,
  role           text not null default 'admin',
  created_at     timestamptz not null default now(),
  last_login_at  timestamptz
);

-- Create event_config table
create table event_config (
  key           text primary key,
  value         jsonb not null,
  updated_at    timestamptz not null default now(),
  updated_by    uuid references admins(id)
);

-- Create audit_logs table
create table audit_logs (
  id           uuid primary key default gen_random_uuid(),
  admin_id     uuid references admins(id),
  action       text not null,
  target       text,
  metadata     jsonb,
  created_at   timestamptz not null default now()
);

-- RPC for sequence
create or replace function nextval_registration_seq()
returns bigint as $$
begin
  return nextval('registrations_seq');
end;
$$ language plpgsql;

-- Enable RLS
alter table registrations enable row level security;
alter table admins enable row level security;
alter table event_config enable row level security;
alter table audit_logs enable row level security;
