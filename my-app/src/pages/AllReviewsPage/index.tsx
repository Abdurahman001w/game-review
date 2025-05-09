import { trpc } from '../../lib/trpc'
export const AllReviewsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getReview.useQuery()
  if (isLoading) {
    return <span>loading...</span>
  }
  if (isError || isFetching) {
    return <span>Error: {error?.message} |??|...</span>
  }
  return (
    <div>
      <h1>All Game Reviews</h1>
      <div>
        {data?.review.map((reviews) => {
          return (
            <div key={reviews.nick}>
              <h2>{reviews.name}</h2>
              <p>{reviews.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
