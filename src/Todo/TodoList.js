import React from "react";

import Todoitems from "./Todoitems";
import PropTypes from "prop-types";

const styles = {
    ul : {
        listStile: 'none',
        margin: 0,
        padding: 0,

    }
}

 function TodoList(props) {
    return(
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <Todoitems todo={todo} key={todo.id} index={index} onChange={props.onToggle}></Todoitems>
            })}

        </ul>
    )
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList