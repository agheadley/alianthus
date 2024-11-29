
import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';





export async function POST({request}) {
    const req = await request.json();
    

    //const { data } = await supabase.from(req.table).select();
    const { data, error } = await supabase
        .from('states')
        .select(`
            id,
            name,
            counties (
            state_id,
                id,
                name
            ),
            country_id,
            countries (
                id,
                name
            )

        
        `)
        .eq('country_id',2)

    return json(data ?? []);
   
   
  
    

};