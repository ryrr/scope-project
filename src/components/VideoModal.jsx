import React, { useState, useEffect } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Comment from './Comment'
let VideoModal = ({video,isOpen,setIsOpen,comments,postComment}) =>{
    let [content,setContent] = useState('')
    let [userId,setUserId] = useState('')

    useEffect(()=>{
        clearForm()
    },[isOpen])

    function clearForm(){
        setUserId('')
        setContent('')
    }

    return(
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal">
            <DialogPanel className='videoModalContainer'>
                <DialogTitle>{video.title}</DialogTitle>
                <Description>{video.description}</Description>
                    <iframe  className='bigPlayer' width='700px' height='400px' src={video.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <form className='commentsForm' onSubmit={(e)=>{postComment(e,content,userId)}}>
                        <textarea placeholder="comment" type='text' value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
                        <input placeholder="userId" type='text' value={userId} onChange={(e)=>{setUserId(e.target.value)}}></input>
                        <div className='commentFunctions'>
                            <button type='submit' value='submit'>POST</button>
                        </div>
                    </form>
                    <div>
                        <h3>Comments</h3>
                        <div className='commentsWrapper'>
                            {comments.map((comment)=><Comment key={comment.id} comment={comment}></Comment>)}
                        </div>
                    </div>
       
            </DialogPanel>
        </Dialog>
    )
}
export default VideoModal