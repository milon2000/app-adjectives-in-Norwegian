window.onload = function() {
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
        btnLeft.setAttribute("disabled", false);
      });
      if (i == 0) {
        const btnRight = document.createElement("button");
        btnRight.className = ('button right');
        var txtNode = document.createTextNode(chatButtonsRight[0]);
        btnRight.appendChild(txtNode);
        chatBtn.appendChild(btnRight);
        btnRight.addEventListener('click', function() {
          addDots();
          setTimeout(removeDots, 1000);
          setTimeout(addLine, 1000);
          i = i + 13;
          btnRight.setAttribute("disabled", false);
          btnLeft.setAttribute("disabled", false);
        });
      }
      if (i == 3) {
        const btnRight = document.createElement("button");
        btnRight.className = ('button right');
        var txtNode = document.createTextNode(chatButtonsRight[1]);
        btnRight.appendChild(txtNode);
        chatBtn.appendChild(btnRight);
        btnRight.addEventListener('click', function() {
          addDots();
          setTimeout(removeDots, 1000);
          setTimeout(addLine, 1000);
          i = i + 8;
          btnRight.setAttribute("disabled", false);
          btnLeft.setAttribute("disabled", false);
        });
      }
      if (i == 5) {
        const btnRight = document.createElement("button");
        btnRight.className = ('button right');
        var txtNode = document.createTextNode(chatButtonsRight[2]);
        btnRight.appendChild(txtNode);
        chatBtn.appendChild(btnRight);
        btnRight.addEventListener('click', function() {
          addDots();
          setTimeout(removeDots, 1000);
          setTimeout(addLine, 1000);
          i++;
          btnRight.setAttribute("disabled", false);
          btnLeft.setAttribute("disabled", false);
        });
      }
      if (i == 7) {
        const btnRight = document.createElement("button");
        btnRight.className = ('button right');
        var txtNode = document.createTextNode(chatButtonsRight[3]);
        btnRight.appendChild(txtNode);
        chatBtn.appendChild(btnRight);
        btnRight.addEventListener('click', function() {
          addDots();
          setTimeout(removeDots, 1000);
          setTimeout(addLine, 1000);
          i = i + 13;
          btnRight.setAttribute("disabled", false);
          btnLeft.setAttribute("disabled", false);
        });
      }
    }
  }

  (function() {
    const starter = document.getElementById('starter');
    starter.addEventListener('click', function() {
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
    const lastElement = document.getElementsByClassName("chat-btn");
    const lastChild = lastElement[lastElement.length - 1].appendChild(dots);
    dots.id = ('dots');
    dot.className = ('dot');
    dot2.className = ('dot');
    dot3.className = ('dot');
  }

  function removeDots() {
    const element = document.getElementById('dots');
    element.parentNode.removeChild(element);
  }
}
