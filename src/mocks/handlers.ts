import { rest } from 'msw'
import * as bpm72 from './72bpm.json'
import * as bpm128 from './128bpm.json'


const handlers = [
  rest.get(`/tempo/`, (req, res, ctx) => {
    const bpm = req.url.searchParams.get('bpm')

    console.log({bpm})
    if (bpm === '72') {
      return res(
        ctx.status(200),
        ctx.json(bpm72)
      )
    }
    return res(
      ctx.status(200),
      ctx.json(bpm128),
    )
  }),
]
export {handlers}