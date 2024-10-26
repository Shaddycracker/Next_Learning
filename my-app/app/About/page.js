import styles from '../page.module.css';
import Link from 'next/link';

export default function AboutPage(){
    
    
    return (
        <main className={styles.page}>

            <h2> This page is About page </h2>
            <Link href="/"> Back to Home </Link>

        </main>
    )
}