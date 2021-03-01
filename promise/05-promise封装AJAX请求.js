function sendAjax(url) {
    return new Promise((resolve, rejects) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    rejects(xhr.status);
                }
            }
        }
    })
}

sendAjax("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata")
.then(v => {
    console.log(v);
}, r => {
    console.log(r);    
})

