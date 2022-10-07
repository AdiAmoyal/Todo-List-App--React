import React from 'react'
import Button from '../UI/Button';

const TaskItem = props => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <li key={props.id} className="task-item__li">
            <div className='task-item__description' style={{borderColor: props.completed ? "#a2d998" : "#f2baac"}}>
                <div className="task-item_details" style={{color: props.completed ? "#a2d998" : "#f2baac"}}>
                    <h2>{props.title}</h2>
                    <div className='task-item__date'>{`${day} ${month} ${year}`}</div>
                </div>
                <div className="task-item__actions">
                    <Button className="task-item__check" onClick={() => {props.onCopmleted(props.id)}}><i className="fas fa-check"></i></Button>
                    <Button className="task-item__trash" onClick={() => {props.onRemove(props.id)}}><i className="fas fa-trash"></i></Button>
                </div>
            </div>
            
        </li>
    );
}

export default TaskItem;