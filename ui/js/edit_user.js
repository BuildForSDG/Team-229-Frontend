window.addEventListener('load', function () {
  let fm = $('form')[0];
  fm.onsubmit = function (e) {
    // alert();
    e.preventDefault();
    let input = $('input');
    // signup form
    let select = $('select');
    if(input[0].value.replace(/ /gi,'').length == 0) alert("First name is required");
    else if(input[2].value.replace(/ /gi,'').length == 0) alert("Last name is required");
    else if(input[3].value.replace(/ /gi,'').length == 0 || input[4].value.replace(/ /gi,'').length == 0) alert("Please include address.");
    else if(input[5].value.replace(/ /gi,'').length == 0) alert("Your email is required.");
    else{
      let request = $.ajax({
        url: "api/editUser",
        method: "POST",
        data: {
          fname: input[0].value,
          lname: input[1].value,
          contact: input[2].value,
          address_one: input[3].value,
          address_two: input[4].value,
          email: input[5].value,
          gender: select[0].value
        }
      });
      request.done(function( msg ) {
        console.log(msg);
        window.location.href = "index.html";
      });
    }
  };
}, false);
