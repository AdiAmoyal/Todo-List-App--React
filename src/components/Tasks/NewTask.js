import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

const NewTask = props => {
    const [enteredTask, setTask] = useState('');
    const [enteredDate, setDate] = useState('');

    const onSubmitHandler = event => {
        event.preventDefault();
        if (enteredTask === '' || enteredDate === '') {
            return;
        }

        props.addNewTask({task: enteredTask, date: new Date(enteredDate), check: false});
        setTask('');
        setDate('');
    };

    const taskChangedHandler = event => {
        setTask(event.target.value);
    };

    const dateChangedHandler = event => {
        setDate(event.target.value);
    };

    const onClear = () => {
        setTask('');
        setDate('');
    };

    return (
        <Card>
            <div className='header'>
                <form className="new-task__form" onSubmit={onSubmitHandler}>
                    <div className="new-task__input">
                        <label>Task</label>
                        <input type="text" value={enteredTask} onChange={taskChangedHandler}></input>
                    </div>
                    <div className="new-task__input">
                        <label>Deadline</label>
                        <input type="date" min="2022-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangedHandler}></input>
                    </div>
                    <div className='new-task__actions'>
                        <Button type='submit'>Save</Button>
                        <Button onClick={onClear}>Clear</Button>
                    </div>
                </form>
            </div>
            
        </Card>
    );
};

export default NewTask;