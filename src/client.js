import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://cccqqoxthwybhllswsxe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjY3Fxb3h0aHd5YmhsbHN3c3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMzE5NTIsImV4cCI6MjAzNTYwNzk1Mn0.jPqEBv906JVKF0KKt6dMY88lGDMjK8WAG--C6cXK4O0'
)

export default supabase
