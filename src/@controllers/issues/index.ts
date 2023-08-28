import HttpRequest from '@/@common/Http'
import linearClient from '@/@provider/linearSdk'
import { NextApiResponse, NextApiRequest } from 'next'

interface EstimateReqBody {
  issueId: string
  estimate: number
}

export default class IssuesController extends HttpRequest {
  constructor(req: NextApiRequest, res: NextApiResponse) {
    super(req, res)
    this.get = this.getAll
    this.post = this.estimate
  }

  async getAll() {
    const response = await linearClient().issues({
      filter: {
        estimate: {
          null: true,
        },
        state: {
          name: {
            eq: 'Planning',
          },
        },
        team: {
          name: {
            eq: 'Alekinho',
          },
        },
        canceledAt: {
          null: true,
        },
      },
    })
    return this.res.status(200).json(response)
  }

  async estimate() {
    const { issueId, estimate } = this.req.body as EstimateReqBody
    const issue = await linearClient().issue(issueId)

    if (!issue) {
      return this.res.status(404).json({ message: 'Issue not found' })
    }

    const response = await issue.update({
      estimate,
    })

    return this.res.status(200).json(response)
  }
}
