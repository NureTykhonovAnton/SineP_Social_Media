export const AdminsList = ({admins = []}) => {
    return (
        <>
            {
                admins.length > 0 ?
                    <ul>
                        {
                            admins.map((admin, index) => {
                                return <li key={index}>
                                    {admin}
                                </li>
                            })
                        }
                    </ul>
                    :
                    <h1>
                        There are no admins
                    </h1>
            }
        </>


    );
}
