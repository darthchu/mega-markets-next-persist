import Head from 'next/head'
import MainContainer from '../redux/containers/MainContainer.jsx'
import styles from '../styles/Home.module.css'

export default function Home({ testState }) {
  return (
    <div>
      <Head>
        <title>MegaMarket Cards</title>
      </Head>
      <MainContainer testState={testState}/>
    </div>
  )
}

export const getStaticProps = async (context) => {

  const res = await fetch(`https://api.jsonbin.io/b/605e529b838e525f311917eb`);
  const testState = await res.json();

  return {
    props: {
      testState,
    }
  }

}
