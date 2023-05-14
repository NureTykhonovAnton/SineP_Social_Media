import {InboxItem} from "./components/InboxItem/InboxItem";

const inboxItems = [
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
    {
        img: '',
        name: 's/Obnoxious_Logos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque cum cumque delectus enim fugit odio porro repellendus veritatis.',
    },
]

export const InboxList = () => {
  return (
      <>
          {
              inboxItems.map(({img, name, description}) => {
                return <InboxItem name={name} img={img} description={description}/>
              })
          }
      </>
  );
}
