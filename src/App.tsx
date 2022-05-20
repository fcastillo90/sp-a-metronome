import { useEffect, useState } from 'react'
import { Layout, Button, RoundedButton, Text, RippleLoader } from '@/components'
import { getSongsWithBpm } from '@/utils/getSongsWithBpm'
import songList from '@/assets/bpm.json'
import { useGetSongsByBpmQuery } from '@/store/services/ApiBpmSlice'
import useClickBpm from '@/hooks/useClickBpm'

const bpmToRender = [72, 74, 82, 84, 128, 138]


function App() {
  const [bpm, setBpm] = useState(72)
  const {data, isFetching} = useGetSongsByBpmQuery(bpm)
  const [clickTempo, setClickTempo, handleClick] = useClickBpm()

  const handleSetBpm = (bpm: number) => {
    setBpm(bpm)
    setClickTempo(0)
  }

  useEffect(() => {
    if (clickTempo) setBpm(clickTempo)
  }, [clickTempo])

  return (
    <Layout
      fullScreen={true}
      direction="column"
      spacing={116}
      style={{
        padding: 32
      }}
    >
      <Text
        variant="h1"
        color="secondary"
        disableMargin={true}
      >
        Digital metronome
      </Text>
      <RoundedButton
        bpm={bpm}
        onClick={handleClick}
      >
        {clickTempo ? clickTempo : bpm}
      </RoundedButton>
      <Layout
        direction="column"
        align='center'
        spacing={0}
      >
        <Layout
          width='300px'
          wrap="wrap"
          style={{gap: '11px 22px'}}
        >
          {bpmToRender.map(value => {
            return (
              <Button
                key={`${value}-button`}
                onClick={() => handleSetBpm(value)}
                isActive={bpm === value}
                aria-label={`${value} bpm`}
              >
                {value} BPM
              </Button>
            )
          })}
        </Layout>
        <Layout
          direction="column"
          spacing={11}
          style={{marginTop:32}}
        >
          <Text
            color='secondary'
            disableMargin={true}
            weight="900"
          >
            Songs that use this BPM:
          </Text>
          {getSongsWithBpm(songList, bpm).map(([title, artist]) => {
            return (
              <Text
                key={`${title}-json-text`}
                color='white'
                disableMargin={true}
              >
                {title} ({artist})
              </Text>
            )
          })}
          {
            isFetching ? 
              <RippleLoader />
              :
              data && data.tempo.map(({artist, song_title}) => {
              return (
                <Text
                  key={`${song_title}-api-text`}
                  color='white'
                  disableMargin={true}
                >
                  {song_title} ({artist.name})
                </Text>
              )
            })
          }

        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
