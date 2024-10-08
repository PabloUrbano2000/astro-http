import { getCollection } from 'astro:content'
import { Clients, Posts, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    {
      id: 1,
      name: 'Kasim',
      age: 35,
      isActive: true
    },
    {
      id: 2,
      name: 'Fernando',
      age: 25,
      isActive: true
    },
    {
      id: 3,
      name: 'Carlos',
      age: 10,
      isActive: false
    },
    {
      id: 4,
      name: 'Emin',
      age: 46,
      isActive: false
    }
  ])

  try {
    const posts = await getCollection('blog')

    await db.insert(Posts).values(
      posts.map((p) => ({
        id: p.id,
        title: p.data.title,
        likes: Math.round(Math.random() * 100)
      }))
    )
  } catch (error) {
    console.log(error)
  }

  console.log('Seed executed')
}
