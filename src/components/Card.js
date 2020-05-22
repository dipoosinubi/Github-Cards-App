import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className='github-profile' style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} style={{ width: '180px'}} alt={profile.name} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '180%', fontWeight: 'bold' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
};


export default Card;