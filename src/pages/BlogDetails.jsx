import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
    const params = useParams()
    return (
        <div>
            test {params.id}
        </div>
    )
}

export default BlogDetails