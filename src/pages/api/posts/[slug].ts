import type { APIRoute } from 'astro'
import { getEntry } from 'astro:content'

export const prerender = false

export const GET: APIRoute = async ({ params }) => {
  const { slug } = params
  const post = await getEntry('blog', slug as any)

  if (!post) {
    return new Response(
      JSON.stringify({ msg: `Post with slug ${slug} not found` }),
      {
        headers: {
          'Content-Type': 'appliction/json'
        },
        status: 200
      }
    )
  }

  return new Response(JSON.stringify(post), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json()

  return new Response(JSON.stringify({ method: 'post', ...body }), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}

export const PUT: APIRoute = async ({ params, request }) => {
  const body = await request.json()

  return new Response(JSON.stringify({ method: 'put', ...body }), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}

export const PATCH: APIRoute = async ({ params, request }) => {
  const body = await request.json()

  return new Response(JSON.stringify({ method: 'patch', ...body }), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}

export const DELETE: APIRoute = async ({ params, request }) => {
  const { slug } = params

  return new Response(JSON.stringify({ method: 'delete', slug }), {
    headers: {
      'Content-Type': 'appliction/json'
    },
    status: 200
  })
}

// DE FORMA ESTÁTICA

// export const getStaticPaths: GetStaticPaths = async () => {
//   return [
//     {
//       params: { slug: 'first-post' }
//     }
//   ]
// }
