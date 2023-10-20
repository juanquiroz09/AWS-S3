import {useState} from 'react'
function App() {
  conts [postMessage, setPost] = useState({
    title: '',
    photo: null
  })
  return (
    <div>
      <form>
        <input type="text" placeholder="title"
        onChange={e => setPost({...postMessage, title: e.target.value})}/>
        <input type="file" name="photo"
        onChange={e => console.log(e)}/>
        <button>Upload</button>
      </form>
    </div>
  )
}

export default App