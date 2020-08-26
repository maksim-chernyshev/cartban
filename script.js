let colName;

function fromLowToHigh(a, b) {
    if ( a.order < b.order ){
        return -1;
      }
      if ( a.order > b.order ){
        return 1;
      }
      return 0;
    }

    GET_COLUMNS_RESPONSE.sort(fromLowToHigh);

    for (let i = 0; i < GET_COLUMNS_RESPONSE.length; i++) {

        colName = GET_COLUMNS_RESPONSE[i].name;

        let newCol = document.createElement('div');
        newCol.innerText = colName;
        newCol.classList.add('col');
        document.querySelector('.app').appendChild(newCol);

    }

    

    