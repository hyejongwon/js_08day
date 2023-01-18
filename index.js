let newsData = [];
let topics = document.querySelectorAll('.gnb>li');
topics.forEach(ele=>ele.addEventListener('click',(e)=>getTopic(e)))
const getTopic = async(e) =>{
    let topic = e.target.dataset.topic;
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=5`);
    let header = new Headers({'x-api-key':'M8BgsdkkdGk16YgxRrZCE0QrA8icMDvmvI6zyogncBA'})
    let response = await fetch(url,{headers:header}) 
    let data =   await response.json() ; 
    newsData = data.articles;
    console.log(newsData)
    viewRender();

}
//최근 해당 토픽 해드라인 뉴스 가져오기 
const getLatestHeadlines = async() => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`);
    let header = new Headers({'x-api-key':'M8BgsdkkdGk16YgxRrZCE0QrA8icMDvmvI6zyogncBA'})
    let response = await fetch(url,{headers:header}) 
    let data =   await response.json() ; 
    newsData = data.articles;
    console.log(newsData)
    viewRender();
}

//가져온 뉴스를 화면에 렌더 하는 함수 
const viewRender = () => {
    let newsDataResult = '' ;
    newsDataResult = newsData.map((ele)=>{
        return `<div class="news">
        <div class="thum-img">
            <img src="${ele.media}" alt="" class="news-img">
        </div>
        <div class="news-des">
            <h2 class="title">${ele.title}</h2>
            <p class="des-txt">${ele.summary}</p>
            <div class="date">${ele.rights}  ${ele.published_date}</div>
        </div>
    </div>`
    })
    
    document.querySelector('.news-board').innerHTML = newsDataResult ;

}
getLatestHeadlines();
