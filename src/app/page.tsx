import { NextPage } from 'next'

const HomePage: NextPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      HomePage
    </main>
  )
}

export default HomePage;
