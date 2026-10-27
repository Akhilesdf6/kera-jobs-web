import { createClient } from '@supabase/supabase-js';
export type Job = {id:number;title:string;organization:string;qualification:string|null;location:string|null;notification_url:string;apply_url:string|null;last_date:string|null;published_at:string|null;verified:boolean;created_at:string};
export async function getJobs():Promise<Job[]>{
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)return [];
 const db=createClient(url,key,{auth:{persistSession:false}});
 const {data,error}=await db.from('jobs').select('id,title,organization,qualification,location,notification_url,apply_url,last_date,published_at,verified,created_at').eq('verified',true).order('created_at',{ascending:false}).limit(100);
 if(error){console.error('Job fetch failed:',error.message);return [];}return data??[];
}
