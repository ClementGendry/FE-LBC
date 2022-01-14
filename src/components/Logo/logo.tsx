import Image from 'next/image';
import Logo from '../../assets/lbc-logo.webp'
import styles from './Logo.module.css';

const LBCLogo: React.FC = (): JSX.Element => {
    return(
        <div className={styles.logo}>
          <Image
            src={Logo}
            alt="Leboncoin's logo"
            width={400}
            height={125}
          />
        </div>
    );
}

export default LBCLogo;