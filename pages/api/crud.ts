import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  lastName: string
}[]

let data = [{ id: 1, name: 'Lord Brenart', lastName: 'Vader' }];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        res.status(200).json(data)
    }
}