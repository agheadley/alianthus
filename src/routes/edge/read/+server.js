
import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';





export async function POST({request}) {
    const reqData = await request.json();
    

    const { data } = await supabase.from("countries").select();
    return json({countries: data ?? []});
   
   
  
    

};