"use client"

import { useState } from "react"
import ReactPlayer from "react-player"
import { Card } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

interface Props {
  url: string
}

export default function VideoPlayer({ url }: Props) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Card className="w-full overflow-hidden rounded-xl border-emerald-800/50 bg-emerald-900/30">
      <div className="relative aspect-video">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-emerald-950/50 backdrop-blur-sm z-10">
            <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
          </div>
        )}
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          onReady={() => setIsLoading(false)}
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
          className="aspect-video"
        />
      </div>
    </Card>
  )
}
