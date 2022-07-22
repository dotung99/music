import { useState } from 'react'
import './App.css'
import DetailSong from './components/DetailSong'
import Header from './components/Header'
import ListSong from './components/ListSong'
import { Songs } from './Context'
import DataSongs from './data/songs.json'
import Playing from './components/Playing'

function App() {
  const [song,setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong:any) => {
  const song =  DataSongs.find(song => song.id === idSong)
    
  if(!song) {
    setSong(DataSongs[0])
  } else {
    setSong(song)
  }

  } 
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
      <Header />
      <div className="lg:grid lg:grid-cols-3 h-screen-music overflow-y-auto bg-slate-500">
      <DetailSong />
      <ListSong />
      </div>
      <Playing />
      </Songs.Provider>
    </div>
  )
}

export default App
