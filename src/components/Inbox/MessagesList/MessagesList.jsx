import {MessageItem} from "./components/MessageItem/MessageItem";

const messagesItems = [
    {
        name: 'System message',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        name: 's/Obnoxious_Logos',
        description: 'You\'re banned lol',
    },
    {
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
]

export const MessagesList = () => {
    return (
        <>
            {
                messagesItems.map(({img, name, description}) => {
                    return <MessageItem name={name} description={description}/>
                })
            }
        </>
    );
}
