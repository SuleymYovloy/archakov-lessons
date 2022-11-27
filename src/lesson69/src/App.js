import React from 'react'

function Button({children, color = "", ...props}) {
  return (
    <button className={`btn ${color}`} {...props}>{children}</button>
  )
}

const App = () => {
  return (
    <div>
      <Button>Кнопка</Button>
      <Button>Кнопка</Button>
      <Button color="green">Кнопка</Button>
    </div>
  )
}

export default App;