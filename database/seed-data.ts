


interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  createdAt: number
  status: string
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending: test v1 ',
      createdAt: Date.now(),
      status: 'pending', 
    },
    {
      description: 'In - Progress: test v2 ',
      createdAt: Date.now() - 100000,
      status: 'in-progress', 
    },
    {
      description: 'Completed: test v3 ',
      createdAt: Date.now() - 200000,
      status: 'completed', 
    },
    {
      description: 'Completed: test v4 ',
      createdAt: Date.now() - 800000,
      status: 'completed', 
    },
  ]
}