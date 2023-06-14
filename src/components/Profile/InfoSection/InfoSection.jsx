export const InfoSection = ({data = {}}) => {
    const dataEntries = Object.entries(data);

    return (
        <ul className={'list-none text-white px-8'}>
            {
                dataEntries.map(([key, value]) => {
                    return <li className={'flex justify-between'}>
                        <div className={'w-1/2'}>{key}</div>
                        <div className={'text-left w-1/5 underline text-[lightblue]'}>{value}</div>
                    </li>
                })
            }
        </ul>
    );
}
