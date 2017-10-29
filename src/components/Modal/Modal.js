import React from 'react';
import Rodal from 'rodal';

// include styles
import './Modal.css';
import 'rodal/lib/rodal.css';

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <button className="btn card-1" onClick={this.show.bind(this)}>{this.props.text}</button>

                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div>Content</div>
                </Rodal>
            </div>
        )
    }
}

export default Modal;
