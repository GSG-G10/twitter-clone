<div  class='post'>
<div class="user-avatar">
  <img src="images/user1.jpg" />
</div>

<div  class="post-content">
  <div class="post-user-info">
    <h4>Amr Monzir </h4>
    <span>@AmrMonzir . 10m</span>
  </div>
  <p class="post-text">
    Flutter web is stable... Oh boy oh boy
  </p>
  <div class="post-img">
    <a href="images/post-img-1.jpg" target="_blank"> <img src="images/post-img-1.jpg" /></a>  
  </div>
  <div class="post-icons">
    <i  class="far fa-comment comment"></i>
    <i  class="fas fa-retweet retweet"></i>
    <i class="far fa-heart like" ></i>
    <i class="fas fa-external-link-alt link"></i>
  </div>
</div>
</div>

const post = document.querySelector('.post')

const createCard = (array) => {
    removeChild(post)
    array.forEach(element => {
        const avatar = document.createElement('div');
        avatar.setAttribute('class','user-avatar')
        post.appendChild(avatar)
        const userImg = document.createElement('img')
        avatar.appendChild(userImg)
        // userImg.classList.add('card-img')
        userImg.src= e.profile_img

        const postContent = document.createElement('div')
        postContent.setAttribute('class','post-content')
        post.appendChild(postContent)
        const postUserInfo = document.createElement('div')
        postUserInfo.setAttribute('class','post-user-info')
        postContent.appendChild(postUserInfo)
        const userName= document.createElement('h4')
        const userNameSpan = document.createElement('span')
        postUserInfo.appendChild(userName, userNameSpan)
        userName.textContent = e.name
        userNameSpan.textContent = `${e.user_name} +${e.time} `
        const postText= document.createElement('p')
        postContent.appendChild(postText)
        postText.setAttribute('class','post-text')
        postText.textContent= e.text_content
        // const postImg= document.createElement('div')
        // postImg.setAttribute('class','post-img')
        // post.appendChild(postImg)
        const icons = document.createElement('div')
        icons.setAttribute('class','post-icons')
        postContent.appendChild(icons)
        const i1 = document.createElement('i')
        const i2 = document.createElement('i')
        const i3 = document.createElement('i')
        const i4 = document.createElement('i')
        postContent.appendChild(i1)
        postContent.appendChild(i2)
        postContent.appendChild(i3)
        postContent.appendChild(i4)
        i1.setAttribute('class','far fa-comment comment')
        i2.setAttribute('class','fas fa-retweet retweet')
        i3.setAttribute('class','far fa-heart like')
        i4.setAttribute('class','fas fa-external-link-alt link')





        
        
    });

}

const removeChild = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }