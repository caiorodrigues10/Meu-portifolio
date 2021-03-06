import Head from 'next/head'
import { CardsComponent } from '../components/CardsComponent'
import {TextsComponent} from '../components/TextsComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caio H. Rodrigues</title>
      </Head>
      
        <TextsComponent />

        <section>
          <CardsComponent />
        </section>
      
    </div>
  )
}
