var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');
var loadButton = document.getElementById('loadButton');
var resultsContainer = document.getElementById('resultsContainer');

loadButton.addEventListener('click', () => {
    let input = document.createElement('input')
    input.type = 'file'
    input.click()
})

function rate (text) {
    if (text.includes('путин') || text.includes('президент') || text.includes('Путин') || text.includes('Президент')) return 100
    if (text.includes('фюрером') || text.includes('Фюрером') || text.includes('Сталин') || text.includes('сталин')) return 0
    if (text.includes('страны') || text.includes('литва') || text.includes('Литва') || text.includes('Беларусь')) return 33
    return false
}

searchButton.addEventListener('click', function() {
    var percent = rate(searchInput.value)
    if (!percent) {
        resultsContainer.innerHTML = '<p>Мы ещё не можем обработать такой запрос</p>'
    } else {
        var resultsHTML = '<p>Достоверность данной ифнормации составляет: ' + percent + '%<br>Ниже приведён список ссылок подверждиющих процент достоверности</p>'
        resultsHTML += `<div class="links">
                            <a href="http://kremlin.ru/events/president/news/71104/videos" target="_blank" rel="noopener noreferrer">http://kremlin.ru/events/president/news/71104/videos</a>
                            <a href="http://kremlin.ru/events/president/news/71105/videos" target="_blank" rel="noopener noreferrer">http://kremlin.ru/events/president/news/71105/videos</a>
                            <a href="http://kremlin.ru/events/president/news/71105/videos" target="_blank" rel="noopener noreferrer">http://kremlin.ru/events/president/news/71105/videos</a>
                            <a href="http://kremlin.ru/" target="_blank" rel="noopener noreferrer">http://kremlin.ru/</a>
                            <a href="http://kremlin.ru/events/president/news/71016/videos" target="_blank" rel="noopener noreferrer">http://kremlin.ru/events/president/news/71016/videos</a>
                        </div>`

        resultsContainer.innerHTML = resultsHTML;
    }
})
  