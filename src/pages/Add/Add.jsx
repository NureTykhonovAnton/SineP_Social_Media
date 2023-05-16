import {HeaderGroup} from "../../components/Add/HeaderGroup/HeaderGroup";
import {FooterButtonGroup} from "../../components/Add/FooterButtonGroup/FooterButtonGroup";

export const Add = () => {
    return (
        <section className={'pt-12 pb-14 flex flex-col items-center justify-between bg-black flex-wrap w-full h-[100vh]'}>
            <div className={'flex flex-col'}>
                <HeaderGroup/>
                <main>
                <textarea placeholder={'BODY'}
                          className={'outline-0 border-0 h-full resize-none ' +
                              'bg-transparent text-white p-4'}></textarea>
                </main>
            </div>

            <FooterButtonGroup/>
        </section>
    );
}
