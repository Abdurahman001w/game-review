import { initTRPC } from '@trpc/server'
const review = [
  {
    nick: 'cool-game-review-1',
    name: 'Game Review-1',
    description: 'Gama Review Description-1',
  },
  {
    nick: 'cool-game-review-2',
    name: 'Game Review-2',
    description: 'Gama Review Description-2',
  },
  {
    nick: 'cool-game-review-3',
    name: 'Game Review-3',
    description: 'Gama Review Description-3',
  },
  {
    nick: 'cool-game-review-4',
    name: 'Game Review-4',
    description: 'Gama Review Description-4',
  },
  {
    nick: 'cool-game-review-5',
    name: 'Game Review-5',
    description: 'Gama Review Description-5 ',
  },
]
const trpc = initTRPC.create()
export const trpcRouter = trpc.router({
  getReview: trpc.procedure.query(() => {
    return { review }
  }),
})
const tereza = 'fetch'
console.info(tereza)
export type TrpcRouter = typeof trpcRouter & {
  _config?: {
    $types: {
      ctx: object
      meta: object
      errorShape: unknown
      transformer: unknown
    }
  }
}
