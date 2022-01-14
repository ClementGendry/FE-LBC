import styles from './Footer.module.css';

const Footer: React.FC = (): JSX.Element => {
    let year: number = new Date().getFullYear();
    
    return (
        <footer className={styles.footer}>
            &copy; leboncoin - {year}
        </footer>
    );
}

export default Footer;