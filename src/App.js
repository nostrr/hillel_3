import React from 'react'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Stepan',
            age: 25,
            toggle: true,
        }
    }

    updateData = () => {
        this.setState({name: 'Mykola', age: 30, toggle: !this.state.toggle});
    }

    render() {
        return (
                <div>
                    { this.state.toggle ? <h1>Абзац</h1> : ""}
                    <p>Name: {this.state.name}, age: {this.state.age}</p>
                    <button onClick={this.updateData}>{this.state.toggle ? 'Скрыть': 'Показывать' }</button>
                </div>
        )
    }
}

export default App;
