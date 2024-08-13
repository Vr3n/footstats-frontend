const TournamentDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <p className="text-2xl semi-bold">{params.slug}</p>
  )
}

export default TournamentDetail
