import Head from 'next/head';
import Link from 'next/link';
import User from '../components/User/user';
import RightArrow from '../components/RightArrow/rightArrow';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/layout';
import { UserInterface } from '../types/user';

const Home: React.FC<{users: UserInterface[]}> = ({ users }): JSX.Element => {
  const usersList = users.map((user: UserInterface) => 
    <li className="listEl" key={user.id}>
      <User {...user} />
    </li>
  );

  return (
    <>
      <Head>
          <title>Frontend Technical test - Leboncoin</title>
          <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
        </Head>
      <Layout home={true}>
        <>
          <div className="card">
            <p>Select a user to get his conversations : </p>
            <ul className="list">
              {usersList}
            </ul>
          </div>
          <Link href={`/readme`} passHref>
            <div className={styles.readme}>
              <p>Read Me</p>
              <RightArrow/>
            </div>
          </Link>
        </>
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3005/users');
  const data = await res.json();

  if (!data) {
    return { notFound: true }
  }
  
  return {
    props: {
      users: data,
    }
  }
}

export default Home