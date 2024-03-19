import P from './P'; // assuming P is a component defined in a file named P.tsx in the same directory


export default function App() {
  const texts = ['승현이', '앙농'].map((text, index) => 
    <P key={index}>{text}</P>
  )
  return <div children={texts} />
}