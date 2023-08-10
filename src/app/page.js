
import Card from './components/Card';
import Greeting from './components/Greeting';


export default function Home() {

  const x = 10;
  return (
    <>
      <Greeting /> 
      <Card title="harchi 1" count={100} theme="light"/>
      <Card title="harchi 2" count={54} theme="dark"/>
      <Card title="harchi 3" count={23} theme="light"/>
    </>
  )
}
