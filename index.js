const API_KEY = `api 키 넣기`;
let newsData = [];
let topics = document.querySelectorAll('.gnb>li');
topics.forEach(ele=>ele.addEventListener('click',(e)=>getTopic(e)));
let searchBtn = document.querySelector('.search-btn');
let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`) ;

const getNews = async() => {
    let header = new Headers({'x-api-key':API_KEY})
    let response = await fetch(url,{headers: header})
    let data =   await response.json() ; 
    newsData = data.articles;
    viewRender();
}

//검색어 입력 
const getSearchNews = () => {
    let searchKeyword = document.querySelector('#search').value ;
    console.log(searchKeyword)
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${searchKeyword}&page_size=5`);
    getNews()
}
//메뉴 클릭시 
const getTopic = (e) =>{
    let topic = e.target.dataset.topic;
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=5`);
    getNews()
}
//최근 해당 토픽 해드라인 뉴스 가져오기 
const getLatestHeadlines = () => {
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`); 
    getNews()
}

//가져온 뉴스를 화면에 렌더 하는 함수 
const viewRender = () => {
    let newsDataResult = newsData.map((ele)=>{
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
    }).join("");
    
    document.querySelector('.news-board').innerHTML = newsDataResult ;
}

getLatestHeadlines();
searchBtn.addEventListener('click',getSearchNews)
