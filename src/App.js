import React from 'react'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    updateData = (resObject, e) => {
        console.log(resObject, e);
        console.log(this.state);
        let tempObj =
        {[resObject.id]: {
                id: resObject.id,
                title: resObject.title,
                body: resObject.body,
                userId: resObject.userId}
        }

        this.setState(tempObj,()=>{
            console.log(this.state);
        });
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const objectData = data.reduce((acc, obj) => {
            acc[obj.id] = obj;
            return acc;
        }, {});
        this.setState(objectData);
    }

    addNewPost = () =>{
        let id = Date.now().valueOf();
        let newPost =
            {
                id: id,
                title: '',
                body: '',
                userId: ''
            };
        let myObject = addPropertyToFront(this.state, id, newPost)
        this.setState(myObject);

        function addPropertyToFront(obj, key, value) {
            return {[key]: value, ...obj};
        }
    }

    render() {
        return (
            <div className='centered-div'>
                <button onClick={this.addNewPost}>Добавить новый</button>
                <ul>
                    {this.state != null
                        ? Object.values(this.state).map((item, index) =>
                            index < 50 ? (
                                <Post
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    body={item.body}
                                    userId={item.userId}
                                    onClick={this.updateData}></Post>
                            ) : '')
                        : null}
                </ul>
            </div>
        )
    }
}

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
        this.objectForSending ={};
        this.state = {
            title : this.props.title,
            body : this.props.body,
            userId: this.props.userId,
            id: this.props.id
        }
    }

    updateComponent = (e) => {
        this.objectForSending = {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId,
            id: this.state.id
        }
        this.props.onClick(this.objectForSending, e);
    }

    onChangeTitle = (e) =>{
        this.setState({title: e.target.innerText});
    }

    onChangeBody = (e) =>{
        this.setState({body : e.target.innerText});
    }

    render() {
        return (
            <div>
                <div>ID {this.props.id}</div>
                <div style={{textAlign: "center"}} onInput={this.onChangeTitle} contentEditable="true">{this.props.title}</div>
                <div contentEditable="true" onInput={this.onChangeBody}>{this.props.body}</div>
                <button value={this.state} onClick={this.updateComponent}>Обновить</button> <button>Удалить</button>
            </div>
        )
    }
}

export default App;
