window.addEventListener('load', function () {
  let newQuestion = $('#newQuestion')[0];
  if(newQuestion) {
    newQuestion.onclick = function (e) {
      e.preventDefault();
      // alert("New question");
      let input = $('input');
      let options = {};
      options.choice1 = {};
      options.choice2 = {};
      options.choice3 = {};
      options.choice4 = {};

      options.choice1.value = input[1].value;
      options.choice1.score = input[2].checked;

      options.choice2.value = input[3].value;
      options.choice2.score = input[4].checked;

      options.choice3.value = input[5].value;
      options.choice3.score = input[6].checked;

      options.choice4.value = input[7].value;
      options.choice4.score = input[8].checked;

      // console.log(options);
      let request = $.ajax({
        url: "api/addQuestion",
        method: "POST",
        data: {
          question: input[0].value,
          options: options,
          id: newQuestion.dataset.id
        }
      });
      request.done(function( msg ) {
        console.log(msg);
      });
    };
  }
}, false);
