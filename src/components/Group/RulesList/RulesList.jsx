export const RulesList = ({rules = []}) => {
    return (
        <>
            {
                rules.length ?
                    <ul  className={'list-decimal ml-2'}>
                        {
                            rules.map((rule, index) => {
                                return <li key={index}>
                                    {rule}
                                </li>
                            })
                        }
                    </ul>
                    :
                    <h1>
                        There are no rules
                    </h1>
            }
        </>
    );
}
