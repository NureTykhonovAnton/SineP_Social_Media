import {HeaderGroup} from "../../components/Add/HeaderGroup/HeaderGroup";
import {FooterButtonGroup} from "../../components/Add/FooterButtonGroup/FooterButtonGroup";
import {useContext, useState} from "react";
import {ChoosePostPlace} from "../../components/Add/ChoosePostPlace/ChoosePostPlace";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

export const Add = observer(() => {
    const {user} = useContext(Context);
    const [page, setPage] = useState(0);
    const [loadedImg, setLoadedImg] = useState('');
    const [data, setData] = useState({
        description: '',
        isNSFW: false,
        photo: '',
        creator_type: 'user',
        creatorId: user.getUser().id
    });


    const handleDataChange = (e, key) => {
        const value = key !== 'photo' ? e.target.value: e.files[0];
        setData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }


    return (
        <section
            className={'pt-12 pb-14 flex flex-col items-center justify-between bg-black flex-wrap w-full h-[100vh]'}>
            {
                page === 0 ?
                    <>
                        <div className={'flex flex-col'}>
                            <HeaderGroup setPage={setPage} value={data.title} setData={handleDataChange}/>
                            <main>
                            <textarea placeholder={'BODY'}
                                      className={'outline-0 border-0 h-full w-full resize-none ' +
                                          'bg-transparent text-white p-4'}
                                      onChange={e => handleDataChange(e, 'description')}
                                      value={data.description}
                            ></textarea>
                                <img src={loadedImg} alt={'Your picture/video'} className={'h-[10rem] w-full'}/>
                            </main>
                        </div>

                        <FooterButtonGroup setLoadedImg={setLoadedImg} handleDataChange={handleDataChange}/>
                    </>
                    :
                    <>
                        <ChoosePostPlace setPage={setPage} data={data}/>
                    </>
            }

        </section>
    );
});
