import { PRIVATE_API_TOKEN, PRIVATE_URL_API } from "$env/static/private"; 
import type { RequestHandler } from "@sveltejs/kit";
export const GET: RequestHandler = async ({ url }) => {


  if (url.origin != "https://localhost:5173") {
    return new Response("unauthorized")
  }

  let req : RequestInit  = {
    headers : {
      Authorization : `Bearer ${PRIVATE_API_TOKEN}`,
      "Content-Encoding" : "gzip",
      "Accept-Encoding" : "gzip",

      "Cache-Control": "max-age=604800"
    }
  } 

  const modelName = url.searchParams.get("modelName");
  

  const modelData = await fetch(`${PRIVATE_URL_API}/assets/${modelName}`, req);


  const data = await modelData.blob()
  
  return new Response(data,{
    headers : {
      'Access-Control-Allow-Origin':  "https://localhost:5173"

    }
  })
}
