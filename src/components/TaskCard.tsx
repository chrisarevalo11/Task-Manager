
export const TaskCard = ({ ...props }): JSX.Element => {
    const { task, i, toggleDoneTask, removeTask } = props
    return (
        <div style={{
            border: task.done ? 'solid 1px #23A853' : '',
            position: 'relative'
        }}
            className="card card-body mt-4" key={i}>
            <h4
                style={{
                    color: task.done ? 'rgb(100, 100, 100, 0.4)' : ''
                }}
            >
                {task.name}
            </h4>
            <p style={{
                    color: task.done ? 'rgb(100, 100, 100, 0.4)' : ''
                }}
            >
                    {task.description}
            </p>
            <div>
                <button
                    className='btn btn-secondary'
                    onClick={() => toggleDoneTask(i)}
                >
                    {!task.done ? 'Done' : 'Undo'}
                </button>
                <button
                    className='btn btn-danger m-1'
                    onClick={() => removeTask(i)}
                >
                    🗑️
                </button>
            </div>
            {task.done
                ? <span className="bg-success" style={{
                        position: 'absolute',
                        backgroundColor: '#23A853',
                        display: 'inline',
                        padding: '2px 5px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        color: '#fff',
                        top: '-15px'
                    }}
                >
                    Completed
                </span>
                : null}
        </div>
    )
}
