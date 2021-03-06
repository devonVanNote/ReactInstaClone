import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function Photowall(props) {
    return (
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo post={post} onRemovePhoto={props.onRemovePhoto}  key={index}/>)}
        </div>
    );
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall;