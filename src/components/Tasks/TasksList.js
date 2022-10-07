import React from 'react';

import Card from '../UI/Card';
import TaskItem from './TaskItem';

const TasksList = props => {

    return (
        <Card>
            <h3>Tasks List</h3>
            <ul>
                {props.items.map((task, i) => (
                    <TaskItem 
                    id={i}
                    title={task.task} 
                    date={task.date} 
                    completed={task.completed} 
                    onRemove={props.onRemove}
                    onCopmleted={props.onCompleted}></TaskItem>
                ))}
            </ul>
        </Card>
    );
};

export default TasksList;