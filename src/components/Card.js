import React from 'react';

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className='github-profile' style={{ margin: '1rem', display: 'flex', alignItems: 'center', backgroundColor: '#0c596d', color: 'white'}}>
                <img src={profile.avatar_url} style={{ width: '180px'}} alt={profile.name} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '180%', fontWeight: 'bold' }}> Name: {profile.name}</div>
                    <div className="profile-name " style={{ fontSize: '120%' }}>Username: {profile.login}</div>
                    <div className="company">Company: {profile.company}</div>
                </div>
            </div>
        );
    }
};


export default Card;