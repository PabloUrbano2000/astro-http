import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: 'Fernando Herrera',
    age: 38
  }
  return new Response(JSON.stringify(person), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}
