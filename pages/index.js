import Head from 'next/head'
import MainContainer from '../redux/containers/MainContainer.jsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MegaMarket Cards</title>
      </Head>
      <MainContainer />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  // const res = await fetch(`http://localhost:3000/api/hello`);
  console.log('getStaticProps fired...');

  // // let clientState;
  // let testState;

  // // if (process.browser) {
  // //   console.log('💩💩💩')
  // //   testState = localStorage.getItem('key');
  // // } else {
  //   console.log('💩💩💩', process.browser)    
  //   const res = await fetch(`https://api.jsonbin.io/b/605e529b838e525f311917eb`);
  //   testState = await res.json();
  // // }
  // // process.browser 🔥🔥🔥

  // console.log('🔥🔥🔥', testState);

  return {
    props: {}
    //   // clientState,
    //   // markets,
    //   testState,
    // }
  }

}
