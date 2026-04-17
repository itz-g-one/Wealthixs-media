-- Create leads table for Wealthixs contact form
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  knowledge_size TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous visitors) to submit a lead
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies — only admins via service role can read leads.
-- Add basic length validation
ALTER TABLE public.leads
  ADD CONSTRAINT leads_name_length CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT leads_email_length CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT leads_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT leads_message_length CHECK (char_length(message) BETWEEN 1 AND 2000),
  ADD CONSTRAINT leads_company_length CHECK (company IS NULL OR char_length(company) <= 150),
  ADD CONSTRAINT leads_knowledge_size_length CHECK (knowledge_size IS NULL OR char_length(knowledge_size) <= 50);