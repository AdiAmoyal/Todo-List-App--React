import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const NewTask = props => {
    const [enteredTask, setTask] = useState('');
    const [enteredDate, setDate] = useState('');
    const [error, setError] = useState(null);

    const onSubmitHandler = event => {
        event.preventDefault();
        if (enteredTask === '' || enteredDate === '') {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid task and date (non-empty values).',
              });
            return;
        }

        props.addNewTask({task: enteredTask, date: new Date(enteredDate), completed: false});
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
            )}
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
        </div>
    );
};

export default NewTask;