function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML =  (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  const children = document.getElementById('grand-node').querySelectorAll('div');
  var i = children.length;
  return children[i - 1];  
}