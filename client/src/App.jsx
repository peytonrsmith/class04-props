import Card from './components/Card'

export default function App() {
  return (
    <main>
      <div className="gallery">
        <Card />
        <Card />
        <Card />
      </div>

      <h2>Debug Info</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
