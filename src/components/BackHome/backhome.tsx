import Link from 'next/link';

const BackHome: React.FC = (): JSX.Element => (
    <Link href='/' passHref>
        <u className='pointer'>Back Home</u>
    </Link>
);

export default BackHome;