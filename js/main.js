let i = 0;
function addLine() {

  if (i < chatQuestions.length) {
    const question = document.createElement('li');
    question.className = ('chat-question clear');
    const textItem = document.createTextNode(chatQuestions[i]);
    question.appendChild(textItem);
    document.getElementById('list').appendChild(question);

    const chatBtn = document.createElement('li');
    chatBtn.className = ('chat-btn clear');
    document.getElementById('list').appendChild(chatBtn);

    const btnLeft = document.createElement("button");
    btnLeft.className = ('button left');
    var txtNode = document.createTextNode(chatButtonsLeft[i]);
    btnLeft.appendChild(txtNode);
    chatBtn.appendChild(btnLeft);
    btnLeft.addEventListener('click', function() {
      addDots();
      setTimeout(removeDots, 1000);
      setTimeout(addLine, 1000);
      i++;
      //i++;
      btnLeft.setAttribute("disabled", false);
    /*  btnRight.setAttribute("disabled", false);*/
    });
if( i == 0 || i == 3 || i == 5 || i == 7) {
    const btnRight = document.createElement("button");
    btnRight.className = ('button right');
    var txtNode = document.createTextNode(chatButtonsRight[i]);
    btnRight.appendChild(txtNode);
    chatBtn.appendChild(btnRight);
    btnRight.addEventListener('click', function() {
      addDots();
      setTimeout(removeDots, 1000);
      setTimeout(addLine, 1000);
      i++;
      //i++;
      btnRight.setAttribute("disabled", false);
      btnLeft.setAttribute("disabled", false);
    });
  }
    //var button = document.querySelectorAll('button');
  }
}

(function() {
  const starter = document.getElementById('starter'); starter.addEventListener('click', function() {
    addDots();
    setTimeout(removeDots, 1000);
    setTimeout(addLine, 1000);
    //i++;
    starter.setAttribute("disabled", false);
  });
})();


function addDots() {
  const dots = document.createElement('div');
  const dot = document.createElement('span');
  const dot2 = document.createElement('span');
  const dot3 = document.createElement('span');
  dots.appendChild(dot);
  dots.appendChild(dot2);
  dots.appendChild(dot3);
  const klosz = document.getElementsByClassName("chat-btn");
  const lastChild = klosz[klosz.length -1].appendChild(dots);
  dots.id = ('dots');
  dot.className=('dot');
  dot2.className=('dot');
  dot3.className=('dot');
}
function removeDots() {
  const element = document.getElementById('dots');
  element.parentNode.removeChild(element);
}
