# Kera Jobs Website

Next.js 15 + Supabase verified government jobs portal starter.

## Deploy
1. Create a new GitHub repository named `kera-jobs-web` (do not replace the Android app repository).
2. Upload this project's files to that repository.
3. Import the repository in Vercel using the Next.js framework preset.
4. Set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` and `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables.
5. Deploy, test, and connect a custom domain if desired.

The `jobs` table is expected to have: id, title, organization, qualification, location, notification_url, apply_url, last_date, published_at, verified, created_at. Public reads require RLS enabled with a SELECT policy restricting results to `verified = true`. Never expose a service-role or secret key in `NEXT_PUBLIC_` variables. Check the table schema and policies before connecting.

This is an initial frontend, not an automatic job crawler. Only existing verified database records display. AdSense integration is not enabled; approval is not guaranteed. Replace contact placeholder and finalize privacy policy before public launch.
