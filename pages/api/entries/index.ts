import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data = 
  | { message: string }
  | IEntry[]
  | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case 'GET':
      return getEntries(res)
    
    case 'POST':
      return postEntries(req, res)
  
    default:
      return res.status(400).json({ message: 'Bad Request' })
  }
  
  
}

const getEntries =async (res:NextApiResponse<Data>) => {
  
  try {
    await db.connect()
    const entries = await Entry.find().sort({ createdAt: 'ascending'})
    await db.disconnect()
    return res.status(200).json(entries)
    
  } catch (error) {
    await db.disconnect()
    return res.status(200).json({message: 'Something is wrong'})
  }

}

const postEntries =async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  const { description = '' } = req.body
  // console.log(req.body)
  
  const newEntry = new Entry({
    description,
    createdAt: Date.now(),
  })

  try {
    //Created de connection in mongo and also the db disconnect
    await db.connect()

    newEntry.save()

    await db.disconnect()
    
    return res.status(201).json( newEntry ) 
    
  } catch (error) {
    await db.disconnect()
    console.log(error)
    return res.status(500).json({message: 'Something is wrong'}) 
  }
  
  
}