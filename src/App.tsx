import { useState } from 'react'
import { Layout, Button, RoundedButton, Text } from '@/components'
import { getSongsWithBpm } from '@/utils/getSongsWithBpm'
import songList from '@/assets/bpm.json'

const bpmToRender = [72, 74, 82, 84, 128, 138]

function App() {
  const [bpm, setBpm] = useState(72)
  return (
    <Layout
      fullScreen={true}
      direction="column"
      spacing={116}
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
      >
        {bpm}
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
                onClick={() => setBpm(value)}
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
                key={`${title}-text`}
                color='white'
                disableMargin={true}
              >
                {title} ({artist})
              </Text>
            )
          })}
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
