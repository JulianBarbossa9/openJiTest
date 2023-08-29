// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean,
  message: string,
  method: string,
  // secret?: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(process.env)
  // Here we can change the status
  res.status(200).json({
    ok: true,
    message: 'All good ',
    // with this I know the data (see in postman)
    method: req.method || 'no data',
    // secret: process.env.SECRET_KEY
  })
}
