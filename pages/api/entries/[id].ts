import mongoose from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data = 
| { message: string }
| IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  // console.log(req.query)
  const { id } = req.query
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Bad request' + id})
  }
  
  switch (req.method) {
    case 'PUT':
      return updateEntry(req ,res)
    case 'GET':
      return getEntry(req ,res)
      
      default:
        return res.status(400).json({ message: 'Bad request'})
  }
  
}

//endPoint 
const updateEntry =async (req:NextApiRequest, res: NextApiResponse) => {
  
  const { id } = req.query
  await db.connect()

  const entryToUpdate = await Entry.findById(id)
  
  if (!entryToUpdate) {
    await db.disconnect()
    return res.status(400).json({message: 'Bad Request' + id})
  }

  const { 
    description = entryToUpdate.description , 
    status = entryToUpdate.status
  } = req.body 

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true})
    db.disconnect()
    return res.status(200).json(updatedEntry!)
    
  } catch (error : any) {
    await db.disconnect()
    console.log({error})
    return res.status(400).json({message: error!.errors!.status.message})
  }

  /*
  * Another form  
  */
  // entryToUpdate.description = description
  // entryToUpdate.status = status
  // await entryToUpdate.save()

}


const getEntry =async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  await db.connect()

  const entryToGet = await Entry.findById(id)
  
  await db.disconnect()

  if (!entryToGet) {
    await db.disconnect()
    return res.status(400).json({ message: 'Bad Request ' + id})
  }
  

  return res.status(200).json( entryToGet )

}