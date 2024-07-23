import React, { useState, useEffect } from 'react';
import VideoModal from './VideoModal'
const Video = ({video,getVideos})=>{
    let [isOpen, setIsOpen] = useState(false)
    let [comments,setComments] = useState([])

    useEffect(()=>{
        getComments()
    },[])

    function getComments(){
        fetch(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${video.id}`)
        .then((data)=> data.json())
        .then((data)=>{
            setComments(data.comments)
        })
    }

    function postComment(e,content,userId){
        e.preventDefault()
        let postBody = {
            video_id: video.id,
            content: content,
            user_id: userId
        }
        fetch('https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            console.log(data)
            if(data.success){ 
                getComments()
                getVideos()
            }
            else{
                //ADD ERROR HERE
            }
        })
    }
    

    return(
        <div className='videoWrapper' onClick={() => setIsOpen(true)}> 
            <iframe className='videoThumbnail' src={video.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className='videoMetas'>
                <h3>{video.title}</h3>
                <span>{video.num_comments} Comments</span>
            </div>
            <VideoModal video={video} isOpen={isOpen} setIsOpen={setIsOpen} comments={comments} postComment={postComment}></VideoModal>
        </div>
    )
   
}
export default Video