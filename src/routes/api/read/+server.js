
import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';





export async function POST({request}) {
    const req = await request.json();
    

    //const { data } = await supabase.from(req.table).select();
    const { data, error } = await supabase
        .from('pupil_table')
        .select(`
            group_id,
            person_id,
            group_table (
                id,
                g
            ),
            person_table (
                id,
                sn,
                pn,
                nc
            )

        
        `)
       
    return json(data ?? []);
   
   
  
    

};