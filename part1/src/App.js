import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.fname} {props.lname}.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greetings. App created by <a href="https://github.com/tomnguyen-dev">Tom Nguyen</a>
    </div>
  )
}

// const App = () => {
//   const fname = 'Peter'
//   const lname = 'Parker'
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello fname='George' lname='Johnson'/>
//       <Hello fname='Mark' lname='Smith'/>
//       <Hello fname={fname} lname={lname}/>
//       <Footer/>
//     </div>
//   )
// }

// Using a root element is not the only working option.
// We can also use an array of components
// const App = () => {
//   return [
//     <h1>Greetings</h1>,
//     <Hello fname='Tom' lname='Win'/>,
//     <Footer/>
//   ]
// }

// But when defining the root component of an application, it is
// not a wise thing to do.
// Because the root element is stipulated, we have extra div-elements.
// This can be avoided by using fragments (wrapping the elements to be returned
// by the component with an empty element)
const App = () => {
  const fname = 'Peter'
  const lname = 'Parker'

  return (
    <>
      <h1>Greetings</h1>
      <Hello fname={fname} lname={lname}/>
      <Footer/>
    </>
  )
}

export default App;
