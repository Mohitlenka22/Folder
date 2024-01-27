import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const routes = [
    {
      name: "Home",
      hrf: "/"
    },
    {
      name: "About",
      hrf: "/about"
    },
    {
      name: "Forms",
      hrf: "/form"
    },
    {
      name: "Contact Us",
      hrf: "/contact"
    }
  ];
  const images = [
    {
      imgUrl: "/img.png"
    },
    {
      imgUrl: "/im.png"
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>My Page</title>
        <meta name="description" content="This is my first nextjs app." />
        <link rel="icon" href="/img.png" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          {routes.map((route) => {
            return <Link key={route.name} href={route.hrf}><li>{route.name}</li></Link>
          })}
        </ul>
      </nav>
      <div className={styles.card}>
        {images.map((image) => {
          return <Image key={image.imgUrl} src={image.imgUrl} layout='fill' alt='This is img' ></Image>

        })}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet modi eius ducimus fugit rem harum soluta deleniti, repellat placeat at tenetur nesciunt temporibus explicabo cumque accusamus minus? Voluptas, ea assumenda!</p>
      </div>
    </div >
  )
}
