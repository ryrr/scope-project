const Comment = ({comment})=>{
    return(
        <div className='commentContainer'>
            <span className='commentPoster'>@{comment.user_id}</span>
            <span className='commentContent'>{comment.content}</span>
        </div>
    )
}
export default Comment