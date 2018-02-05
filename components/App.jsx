import React from 'react'

const Display = () => {
    return(
        <div>
            Hello World!
        </div>
    );
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Display />
            </div>
        );
    }
}

export default App;