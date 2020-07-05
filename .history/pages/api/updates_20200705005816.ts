import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
 let output = null;
  try{
    const response = await fetch('https://gatry.com/home/bullets?data=2020-06-16+18:00:00');
    output = await response.json();
    return res.status(200).json(output)
  }
  catch(e) {
    return res.status(204).json({})
  }
}
