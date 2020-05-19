import React from 'react';

class Form extends React.Component {
    render () {
        return (
            <form>
                <input type='text'  placeholder='Github Username'/>
                <button>Add Card</button>
            </form>
        )
    }

};

export default Form;