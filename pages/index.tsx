import type { NextPage } from 'next'
import Layout from '../layout'
import Footer from '../modules/Footer'
import Header from '../modules/Header'
import Sorter from '../modules/Sorter'
import Chat from '../modules/Chat'
import 'flowbite';

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Chat />
      <Sorter />
      <Footer />
    </Layout>
  )
}

export default Home
