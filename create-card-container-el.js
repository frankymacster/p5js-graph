let cardId = 0;
let cardElementId = 0;

const createCardContainerEl = (linkData, bodyData) => {
  cardId++;
  cardElementId++;

  var cardContainerEl = document.createElement('div');
  cardContainerEl.id = 'card-' + cardId;
  var cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardContainerEl.appendChild(cardEl);
  var cardHeaderEl = document.createElement('div');
  cardHeaderEl.classList.add('card-header');
  cardEl.appendChild(cardHeaderEl);
  var cardLinkEl = document.createElement('a');
  cardLinkEl.classList.add('card-link');
  cardLinkEl.setAttribute('data-toggle', 'collapse');
  cardLinkEl.setAttribute('data-parent', '#card-' + cardId);
  cardLinkEl.setAttribute('href', '#card-element-' + cardElementId);
  cardLinkEl.innerHTML = linkData;
  cardHeaderEl.appendChild(cardLinkEl);

  var cardElementEl = document.createElement('div');
  cardElementEl.id = 'card-element-' + cardElementId;
  cardElementEl.classList.add('collapse');
  cardEl.appendChild(cardElementEl);
  var cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body');
  cardBodyEl.appendChild(bodyData);
  cardElementEl.appendChild(cardBodyEl);

  return cardContainerEl;
};
