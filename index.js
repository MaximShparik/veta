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
    if (percent === false) {
        resultsContainer.innerHTML = '<p>Мы ещё не можем обработать такой запрос</p>'
    } else {
        var resultsHTML = '<p>Достоверность данной информации составляет: <span>' + percent + '%</span><br>Ниже приведён список ссылок, подтверждающих процент достоверности</p>'
        resultsHTML += `<div class="links">
                            ${percent == 100 ? '<a href=" http://www.kremlin.ru/structure/president/presidents" target="_blank" rel="noopener noreferrer"> http://www.kremlin.ru/structure/president/presidents</a>' : ''}
                            ${percent === 0 ? '<a href="https://encyclopedia.mil.ru/encyclopedia/history_department/more.htm?id=11344854@SD_Employee" target="_blank" rel="noopener noreferrer">https://encyclopedia.mil.ru/encyclopedia/history_department/more.htm?id=11344854@SD_Employee</a>' : ''}
                            ${percent == 33 ? '<a href="https://amp.rbc.ru/rbcnews/politics/11/02/2023/63e729f69a794760e4f763b9" target="_blank" rel="noopener noreferrer">https://amp.rbc.ru/rbcnews/politics/11/02/2023/63e729f69a794760e4f763b9</a>' : ''}
                        </div>`

        resultsContainer.innerHTML = resultsHTML;
    }
})
  