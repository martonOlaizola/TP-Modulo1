import './App.css'

function App() {

  return (
    <div className='RegistroBody'>
      <h2>Resgistrate</h2>
      <form className='RegistroForm'>
        <div className='CampoForm'>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="name"/>
        </div>

        <div className='CampoForm'>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName"/>
        </div>

        <div className='CampoForm'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email"/>
        </div>

        <div className='CampoForm'>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono"/>
        </div>

        <div className='CampoForm'>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password"/>
        </div>

        <div className='CampoForm'>
          <label htmlFor="rePassword">Confirmar Contraseña:</label>
          <input type="password" id="rePassword"/>
        </div>

        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}

export default App;
