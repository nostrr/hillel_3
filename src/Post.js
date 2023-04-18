import {memo, useState} from "react";

const Post = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const [userId, setUserId] = useState(props.userId);
    const [id, setId] = useState(props.id);

    const updateComponent = (e) => {
        const resObject = {
            title: title,
            body: body,
            userId: userId,
            id: id
        };
        props.onClick(resObject, e);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.innerText);
    };

    const onChangeBody = (e) => {
        setBody(e.target.innerText);
    };

    const onDelete = (e) => {
        if (window.confirm('Вы действительно хотите удалить элемент?')) {
            props.onDelete(id, e);
        }
    };



    return (
        <div>
            <div>ID {id}</div>
            <div style={{ textAlign: 'center', caretColor: 'red' }} onInput={onChangeTitle} contentEditable='true'>
                {title}
            </div>
            <div contentEditable='true' onInput={onChangeBody}>
                {body}
            </div>
            <button value={id} onClick={updateComponent}>Обновить</button>   <button onClick={onDelete}>Удалить</button>
        </div>
    );
};

function areEqual(prevProps, nextProps) {
    return prevProps.id == nextProps.id && prevProps.body == nextProps.body && prevProps.title == nextProps.title
        && prevProps.userId == nextProps.userId
}

export default memo(Post, areEqual);