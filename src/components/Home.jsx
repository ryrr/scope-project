import React, { useState, useEffect } from 'react';
import Video from './Video'
import UploadModal from './UploadModal';
import logo from '../assets/FULL_LOGO_COLOR.png'
const Home = ()=>{
    let [videos, setVideos] = useState([])
    let [isOpen, setIsOpen] = useState(false)
    let [searchText, setSearchText] = useState('')
    let matchingVideos = videos.filter((video)=>{
        if(video.title.includes(searchText) || searchText.length === 0){
            return true
        }
        return false
    })

    useEffect(()=>{
        getVideos()
    },[])

    function getVideos(){
        fetch('https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=ryan_rivera_prod')
        .then((rawData)=> rawData.json())
        .then((data)=>{
            setVideos(data['videos'])
            setFilteredVideos(data['videos'])
        })
    }

    function upload(e,userId,description,url,title,videoId,formType){
        e.preventDefault()
        let postBody = {}
        let method = ''
        console.log(formType)
        if(formType === 'UPLOAD'){
            postBody = {
                user_id: userId,
                description: description,
                video_url: url,
                title: title
            }
            method = 'POST'
        }
        else if(formType === 'UPDATE'){
            postBody = {
                video_id: videoId,
                title: title,
                description: description
            }
            method = 'PUT'
        }
     
        fetch('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', {
                method: method,
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(postBody)
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                if(data.success) getVideos() 
                else{
                    //ADD ERROR HERE
                }
            })
    }


    return(
        <>
            <div className='navBar'>
                <img src={logo}></img>
                <div className='navBarRight'>
                    <input className='searchBar' placeholder='search' onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button className='uploadBttn' onClick={() => setIsOpen(true)}>Upload/Update</button>
                </div>
                <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} upload={upload}></UploadModal>
            </div>
            <div className="videos">
                {matchingVideos.map((video)=>{
                    return <Video key={video.id} video={video} getVideos={getVideos}></Video>
                })}
            </div>
        </>
    )
}

export default Home