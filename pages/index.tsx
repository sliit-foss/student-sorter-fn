import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../layout'
import Footer from '../modules/Footer'
import Header from '../modules/Header'
import Sorter from '../modules/Sorter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <Header />
      <Sorter />
      <Footer />
    </Layout>
  )
}

export default Home
