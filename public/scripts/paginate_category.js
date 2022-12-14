//public/scripts/paginate.js

let page = 0

function paginate(label){
    $('.pagination img').attr('src', '/images/loading.gif')
    page += 1
    
    $.post(`/category/${label}`,{page:page},function(data, status){
        appendItem(data.items, data)
    })
}

function appendItem(items, data){
    let html = ''
    
    if(items){
        for(const item of items){
            html += `<a href="/post/${item.key}">`
            html += `<img class="thumb" src="${item.thumb}" />`
            if(item.videos){
                if((item.videos !== "")&&(item.videos !== "[]")){
                    html += `<img class="play-icon" src="/images/play.png" />`
                }
            }
            html += `<div class="date">${new Date(item.date).toLocaleDateString("it-IT")}</div>`
            html += `<div class="title">${item.title}</div>`
            html += `</a>`
        }
    }
    
    let message = ''
    if(data.count - data.page*data.categoryItemLimit === 1){
        message = `1 more post`
    }else if(data.count - data.page*data.categoryItemLimit <= 0){
        message = `no more post`
    }else{
        message = `${data.count - data.page*data.categoryItemLimit} more posts`
    }

    $('.Category .inner').append(html)
    $('.Category .pagination p').html(message)
    
    $('.pagination img').attr('src', '/images/loadmore.png')
}