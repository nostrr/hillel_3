import React from 'react'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {posts : []};
    }

    updateData = (resObject, e) => {
        let updateItem = {
                id: resObject.id,
                title: resObject.title,
                body: resObject.body,
                userId: resObject.userId
        }
        let index = this.state.posts.findIndex((element)=>{
            return element.id === resObject.id;
        });
        let posts = this.state.posts;
        posts[index] = updateItem;
        this.setState(posts);
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            if(Array.isArray(data)) {
                this.setState({posts: data}, () =>
                    console.log(this.state));
            }
        }catch (e){
            console.log(e);
        }
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
        this.setState({posts: [newPost,...this.state.posts]});
    }

    deletePost =(id, e) =>{
        let newPosts = this.state.posts.filter((element) =>{
            return element.id!==id;
        });
        this.setState({posts: newPosts});
    }

    render() {
        return (
            <div className='centered-div'>
                <button onClick={this.addNewPost}>Добавить новый</button>
                <ul>
                    {this.state != null
                        ? this.state.posts.map((item, index) =>
                            index < 50 ? (
                                <Post
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    body={item.body}
                                    userId={item.userId}
                                    onClick={this.updateData}
                                   // onDelete={(e)=>this.deletePost(item.id,e)}
                                    onDelete={this.deletePost}
                                >
                                </Post>
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

    componentWillUnmount(){
        console.log('Our Id', this.props.id);
    }

    onDelete =(e)=>{
        if(window.confirm('Вы действительно хотите удалить элемент?')) {
            this.props.onDelete(this.props.id, e);
        }
    }

    render() {
        return (
            <div>
                <div>ID {this.props.id}</div>
                <div style={{textAlign: "center", caretColor:'red'}} onInput={this.onChangeTitle} contentEditable="true">{this.props.title}</div>
                <div contentEditable="true" onInput={this.onChangeBody}>{this.props.body}</div>
                <button value={this.state} onClick={this.updateComponent}>Обновить</button> <button onClick={this.onDelete}>Удалить</button>
            </div>
        )
    }
}

export default App;
