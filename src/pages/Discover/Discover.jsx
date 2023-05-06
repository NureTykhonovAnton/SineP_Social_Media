import DiscoverCard from "../../components/Discover/DiscoverCard/DiscoverCard";


const discoverCards = [
    {
      name: 's/Memes',
      subs: '2k',
      img: 'https://plus.unsplash.com/premium_photo-1672907030852-3eb140df586f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
        name: 's/Art',
        subs: '1.4k',
        img: 'https://images.unsplash.com/photo-1682621034494-2242e054972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80',
    },
    {
        name: 's/Advice',
        subs: '15',
        img: 'https://images.unsplash.com/photo-1518888154325-928734ae11b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
        name: 's/Fashion',
        subs: '0.1k',
        img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80',
    },
    {
        name: 's/Cheerlead',
        subs: '69mil',
        img: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80',
    },
    {
        name: 's/CryptoCurrency',
        subs: '1',
        img: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1246&q=80',
    },
    {
        name: 's/OtherThing',
        subs: '4k',
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        name: 's/ImTiredNow',
        subs: '420k',
        img: 'https://images.unsplash.com/photo-1479134262046-a470bfaf7a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
];

export const Discover = () => {


    return (
      <section className={'pt-12 pb-14 flex items-center justify-around bg-black flex-wrap'}>
          {
              discoverCards.map(({name, subs, img}) => {
                  return <DiscoverCard name={name} subs={subs} img={img}/>
              })
          }
      </section>
    );
}
