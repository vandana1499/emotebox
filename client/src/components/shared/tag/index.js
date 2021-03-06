import React from 'react'

import './tag.css'

function Tag(props) {
    const tagName = props.tagName;
    
    return (
        <button className="tag__btn">
            { tagName }
        </button>
    )
}

export default Tag;