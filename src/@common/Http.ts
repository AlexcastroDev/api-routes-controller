import { NextApiResponse, NextApiRequest } from 'next'

export enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
  CONNECT = 'CONNECT',
}

export default class HttpRequest {
  req: NextApiRequest
  res: NextApiResponse

  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.req = req
    this.res = res
  }

  handleError() {
    this.res.status(405).end(`Method ${this.req.method} Not implemented`)
  }

  get() {
    this.handleError()
  }

  post() {
    this.handleError()
  }

  execute() {
    switch (this.req.method) {
      case HTTP_METHOD.GET:
        this.get()
        break
      case HTTP_METHOD.POST:
        this.post()
        break
      default:
        this.handleError()
        break
    }
  }
}
