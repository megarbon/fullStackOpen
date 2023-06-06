const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

const App = () => {
  return (
    <div>
      <Avatar />
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />

      <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      height={500}
    />

    </div>
  )
}

export default App