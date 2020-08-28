const appElement = document.querySelector('.app');

let htmlString = '';

for (let index = 0; index < GET_COLUMNS_RESPONSE.length; index++) {

    const colmnId = GET_COLUMNS_RESPONSE[index].id;
    const currentColumnCards = getCardsByColumnId(colmnId);
    let allCardsForColumnHtml = '';

    currentColumnCards.forEach(function (card) {
        let user = GET_USERS_RESPONSE.find(function (user) {
            return user.id == card.userId;
        });

        allCardsForColumnHtml += getCard(card.id, card.title, card.description, user.name, user.photoUrl);
    });


    htmlString += `<div class="col">
                        <div class="col__header">${GET_COLUMNS_RESPONSE[index].name}</div>
                        <div class="col_content">${allCardsForColumnHtml}</div>
                    </div>`;

}

appElement.innerHTML = htmlString;

function getCardsByColumnId(id) {
    return GET_CARDS_RESPONSE.filter(function (card) {
        return card.columnId === id;
    })
}

function getCard(id, title, description, userName, photo) {

    let selectUsersHtml = `<select class="card__user-select">`;
    GET_USERS_RESPONSE.forEach(user => {
        if (userName === user.name) {
            selectUsersHtml += `<option value="${user.id}"selected>${user.name}</option>`;
        } else {
        selectUsersHtml += `<option value="${user.id}">${user.name}</option>`;
    }

    });

    
    // selectUsersHtml += GET_USERS_RESPONSE.map(human => {
    //     return `<option>${human.name}</option>`;
    // }).join('');

    selectUsersHtml += `</select>`;



    return `<div class="card" data-id="${id}">
                <div class="card__inform">
                    <div class="card__title">${title}</div>
                    <div class="card__description">${description}</div>
                </div>
                <div class="card__user">
                    <div class="card__user-picture">
                        <img class="card__user-photo"src="${photo}">
                    </div>
                        <div class="card__user-name">${selectUsersHtml}</div>
                </div>
            </div>`;
}

document.addEventListener('change', event => {
    if (event.target && event.target.classList.contains('card__user-select')) {
        let cardDiv = event.target.parentElement.parentElement.parentElement;
        let cardId = cardDiv.dataset.id;
        GET_CARDS_RESPONSE.find(card => card.id === 1).userId = 1;


    }
});


Менялся массив когда выбран другой пользователь


