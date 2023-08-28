import IssuesController from '@/@controllers/issues'
import { NextApiResponse, NextApiRequest } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const Issue = new IssuesController(req, res)
  return Issue.execute()
}
