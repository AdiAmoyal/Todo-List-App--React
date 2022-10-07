import React from 'react'

const TaskItem = props => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <li key={props.id} className="task-item__li">
            <div className='task-item__description'>
                <h2>{props.title}</h2>
                <div className='task-item__date'>{`${day} ${month} ${year}`}</div>
                {/* <input type='checkbox' onClick={props.isCheck}></input> */}
            </div>
        </li>
    );
}

export default TaskItem;