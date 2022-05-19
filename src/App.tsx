import { useState } from 'react'
import { Layout, Button, RoundedButton, Text } from '@/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout
      fullScreen={true}
      direction="column"
    >
      <Text
        variant="h1"
      >
        DIGITAL METRONOME
      </Text>
      <RoundedButton
        bpm={120}
      >
        test
      </RoundedButton>
      <Button>test</Button>
      <Text>info</Text>
    </Layout>
  )
}

export default App
