import { useState } from "react"
import Tweet from "./componentes/tweet"
import { AppRoutes } from "./Routes"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])

  const createTweet = () => {
    setTweets([...tweets, 'Tweet 4'])
  }

  return (
    <>
    <AppRoutes />
    {/*<div>
      {
        tweets.map((tweet, index) => {
          return <Tweet text={tweet} key={index} />
        })
      }
      <button
        style={{
          padding: '15px',
          borderRadius: '10px',
          backgroundColor: '#55ff',
          color: '#ffffff'
        }}
       onClick={createTweet}
      >
      Adicionar novo Tweet
      </button>
      </div>*/}
      </>
  )
}

export default App
