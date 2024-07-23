import React, { useState, useEffect } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
let UploadModal = ({isOpen,setIsOpen,upload}) =>{
    let [formType,setFormType] = useState('UPLOAD')
    let [userId,setUserId] = useState('')
    let [description,setDescription] = useState('')
    let [url,setUrl] = useState('')
    let [title,setTitle] = useState('')
    let [videoId,setVideoId] = useState('')

    useEffect(()=>{
        setUserId('')
        setTitle('')
        setDescription('')
        setUrl('')
        setVideoId('')
    },[isOpen])
    
    return(
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal">
            <DialogPanel>
                <DialogTitle className="font-bold">VIDEO
                    <select className='uploadToggle' onChange={(e)=>setFormType(e.target.value)}>
                        <option value="UPLOAD"><h3>UPLOAD</h3></option>
                        <option value="UPDATE"><h3>UPDATE</h3></option>
                    </select>
                </DialogTitle>
                <Description>fill out the form below to upload or update a video</Description>
                <div>
                    <form className='videoForm' onSubmit={(e)=>{upload(e,userId,description,url,title,videoId,formType)}}>
                        {formType === 'UPLOAD' ?
                            <div className='upForm'>
                                <input placeholder='user id' type='text' value={userId} onChange={(e)=>setUserId(e.target.value)}></input>
                                <input placeholder='title' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                                <input placeholder='description' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                                <input  placeholder='url' type='text' value={url} onChange={(e)=>setUrl(e.target.value)}></input>
                            </div>
                            : 
                            <div className='upForm'>
                                <input placeholder='video id' type='text' value={videoId} onChange={(e)=>setVideoId(e.target.value)}></input>
                                <input placeholder='title' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                                <input placeholder='description' type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
                            </div>
                        }
                        <button type='submit' value='submit'>{formType}</button>
                    </form>
                </div>
            </DialogPanel>
    </Dialog>
    )
    
}
export default UploadModal