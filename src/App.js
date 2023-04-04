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
        let toggle = !this.state.toggle;
        this.setState({name: 'Mykola', age: 30, toggle});
    }

    render() {
        let h1;
        let text;
        if (this.state.toggle) {
            h1 = <h1>Абзац</h1>
            text = 'Скрыть';
        } else {
            text = 'Показывать';
        }

        return (
            <>
                <div>
                    {h1}
                    <p>Name: {this.state.name}, age: {this.state.age}</p>
                    <button onClick={this.updateData}>{text}</button>
                </div>
            </>
        )
    }
}

export default App;
