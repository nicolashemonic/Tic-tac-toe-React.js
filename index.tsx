import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<any, any> {
    render() {
        return <p>Tic-Tac-Toe</p>;
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"));