import React from 'react';
import { Nav, NavItem} from 'react-bootstrap';
import Header from './header/Header';


class App extends React.Component {


    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }


    render() {
        return(
            <div>

                <Header></Header>
            </div>
        )
    }
}

export default App