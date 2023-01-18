const getLatestHeadlines = async() => {
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=5`);
    let header = new Headers({'x-api-key':'자기API키코드'})
    let response = await fetch(url,{headers:header}) 
    console.log(response.json())
}


getLatestHeadlines();