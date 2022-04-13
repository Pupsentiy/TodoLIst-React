import Item from '../item/Item';

const ListItems = ({ todo, setTodos }) => {
  return (
        todo.map((item, index) => (
          <Item 
          item={item} 
          key={item.id} 
          setTodos={setTodos} 
          todo={todo} 
          index={index} 
          />
        ))
  )
}

export default ListItems