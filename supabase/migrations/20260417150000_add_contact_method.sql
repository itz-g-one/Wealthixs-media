-- Add contact_method to leads
ALTER TABLE public.leads
  ADD COLUMN contact_method TEXT;

-- Add basic length validation
ALTER TABLE public.leads
  ADD CONSTRAINT leads_contact_method_length CHECK (contact_method IS NULL OR char_length(contact_method) <= 150);
