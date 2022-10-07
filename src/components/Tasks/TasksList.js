import React from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import TaskItem from './TaskItem';

const TasksList = props => {

    return (
        <Card>
            <h3>Tasks List</h3>
            <ul>
                {props.items.map((task, i) => (
                    <TaskItem id={i} title={task.task} date={task.date}></TaskItem>
                ))}
            </ul>
        </Card>
    );
};

export default TasksList;