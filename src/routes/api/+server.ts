import { PRIVATE_API_TOKEN, PRIVATE_URL_API } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
  const api_endpoint  = PRIVATE_URL_API

  let req : RequestInit  = {
    headers : {
      Authorization : `Bearer ${PRIVATE_API_TOKEN}`
    }
  } 

  const modelName = url.searchParams.get("modelName");

  const modelData = await fetch(`${PRIVATE_URL_API}/assets/${modelName}`, req);

  const data = await modelData.blob()
  
  return new Response(data)
}
