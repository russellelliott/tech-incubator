//Page for making, editing, and deleting posts using realtime database
import logo from './logo.svg';
import './App.css';
import React from 'react'

import CreateNewPost from './Components/CreateNewPost'
import Posts from './Components/Post'
import DisplayAllPosts from './Components/DisplayAllPosts'


function Projects(){
    return(
        <div>
            <h1>Post Projects</h1>
            <h2>Stuff</h2>

            <div>
      <DisplayAllPosts />
    </div>
            
        </div>
        

    )
}

export default Projects;