import styles from './Home.module.css'
import {Header} from "../../components/Home/Header/Header";
import {MobileNavigationFooter} from "../../components/Home/BottomNavigation/BottomNavigaton";
import Post from "../../components/Home/Post/Post";

export const Home = () => {
    const photoSrcObj= [
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1679669693237-74d556d6b5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80',
        'https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        'https://images.unsplash.com/photo-1612900631807-6e32af134ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1681204620601-5b0806930959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    ];

    return (
        <section className={styles.MainSection}>
            <section className={'pt-10 pb-12 flex flex-col items-center'}>
                {
                    photoSrcObj.map(src => {
                        return <Post photoSrc={src}/>
                    })
                }
            </section>
        </section>
    );
}
