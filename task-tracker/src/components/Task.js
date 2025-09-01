const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
            <h3>
                {task.text}{' '}
                {/* FIX: Replaced the FaTimes icon component with a simple 'X' text to remove the dependency */}
                <span
                    style={{ color: 'red', cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => onDelete(task.id)}
                >
                    X
                </span>
            </h3>
            <h3>{task.day}</h3>
        </div>
    )
}

export default Task
