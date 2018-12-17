const starter = document.getElementById('starter');
let i = 0;

function addLine() {
  if (i < chatQuestions.length) {

    const question = document.createElement('li');
    question.className = ('chat-question');
    const textItem = document.createTextNode(chatQuestions[i]);
    question.appendChild(textItem);
    document.getElementById('list').appendChild(question);

    const chatBtn = document.createElement('li');
    chatBtn.className = ('chat-btn');
    document.getElementById('list').appendChild(chatBtn);

    const btnLeft = document.createElement("button");
    btnLeft.className = ('button left');
    var txtNode = document.createTextNode(chatButtonsLeft[i]);
    btnLeft.appendChild(txtNode);
    chatBtn.appendChild(btnLeft);
    btnLeft.addEventListener('click', function() {
      addLine(i);
      i++;
      btnLeft.setAttribute("disabled", false);
      btnRight.setAttribute("disabled", false);
    });

    const btnRight = document.createElement("button");
    btnRight.className = ('button right');
    var txtNode = document.createTextNode(chatButtonsRight[i]);
    btnRight.appendChild(txtNode);
    chatBtn.appendChild(btnRight);
    btnRight.addEventListener('click', function() {
      addLine(i);
      i++;
      btnRight.setAttribute("disabled", false);
      btnLeft.setAttribute("disabled", false);
    });
    //var button = document.querySelectorAll('button');
  }
}
starter.addEventListener('click', function() {
  addLine(i);
  i++;
  starter.setAttribute("disabled", false);
});


(function() {const buttonek = document.querySelector('.buttonek');
buttonek.addEventListener('click', function() {
  let dots = document.createElement('div');
  let dot = document.createElement('span');
  let dot2 = document.createElement('span');
  let dot3 = document.createElement('span');
  dots.appendChild(dot);
  dots.appendChild(dot2);
  dots.appendChild(dot3);
  document.getElementsByClassName("chat-btn")[0].appendChild(dots);
  dots.id = ('dots');
  dot.className=('dot');
  dot2.className=('dot');
  dot3.className=('dot');
  setTimeout(removeDiv, 3000);
});
function removeDiv() {
  const element = document.getElementById('dots');
    element.parentNode.removeChild(element);
}
})();
