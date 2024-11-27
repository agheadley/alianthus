
import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';





export async function POST({request}) {
    const reqData = await request.json();
    

    const { data, error } = await supabase.auth.getSession();
    console.log(data,error);
    
    if(reqData.type==='private') {

        const {data,error} =await supabase.storage.from('private').createSignedUrl('user.svg', 3600)
        if(data) {
            return json({url:data.signedUrl});
        } else return json({url:'',error:error});


    } else {
        const { data } = supabase.storage.from('images').getPublicUrl(reqData.name);
        return json({url: data.publicUrl});
    };
   
   
  
    

};