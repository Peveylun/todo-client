import './TodoCard.css';

export default function TodoCard() {
    return <>
        <div className="todo-card">
            <p>Some Text</p>
            <div className="done">
                <label htmlFor="done">Done: </label>
                <input type="checkbox" id="done" name="done"/>
            </div>
        </div>
    </>
}