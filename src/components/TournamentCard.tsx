import Image from 'next/image'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

interface TournamentCardTypes {
  imageSrc: string,
  tournamentName: string,
  tournamentDescription: string
}

const TournamentCard = ({ imageSrc, tournamentName, tournamentDescription }: TournamentCardTypes) => {
  return (
    <Card className="flex flex-col cursor-pointer hover:shadow-md">
      <Image
        className="rounded-t-lg w-full h-full object-cover"
        width={200}
        height={400}
        src={imageSrc}
        alt={`${tournamentName} Logo`} />
      <CardHeader>
        <CardTitle className="text-lg">
          {tournamentName}
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          {tournamentDescription}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default TournamentCard
