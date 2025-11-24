
const isActive: boolean = false;

export function FirstStepsApp() {
const myStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#3d8edeff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
}

  return (
    <>
    <h1> hola mundo</h1>
    <p style={{
      backgroundColor: isActive ? 'green' : 'red',
      padding: '20px',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 'bold',
    }}
    >que tal</p>  
    <button style={myStyle} >click me</button>
    <div>
      <h2>hola dentro de un div  </h2>
    </div>

{/* <ItemCounter /> */}


    </>
  );
}