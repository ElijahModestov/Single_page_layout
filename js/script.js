'use strict'

const checkDomainButton = document.querySelector('.domain-input-field input:nth-child(2)');
const checkDomainResult = document.querySelector('.domain-check-result');
const changeStateLink = document.querySelectorAll('.change-state');
const changeStateContent = document.querySelectorAll('.hidden-content');

checkDomainButton.addEventListener('click', updateResult);

for (let i = 0; i < changeStateLink.length; i++) {
  changeStateLink[i].addEventListener('click', () => { updateState(i); });  
}

function updateResult() {
  let domain = document.getElementById('domain_check').value;
  checkDomainResult.innerHTML = `Домен ${domain} &ndash; свободен. <a href="#">Зарегистрировать за 39&#8381;</a>`;
}

function updateState(i) {
  if (changeStateContent[i].style.display == 'none') {
  	for (let j = 0; j < changeStateLink.length; j++) {
  	  if (changeStateContent[j].style.display == 'block') {
  	    changeStateContent[j].style.display = 'none';
  	  };
    };
    changeStateContent[i].style.display = 'block';
  } else {
    changeStateContent[i].style.display = 'none';
  };
}

