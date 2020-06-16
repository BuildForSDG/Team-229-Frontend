window.addEventListener('load', function () {
  $('button')[0].onclick = function () {
    // alert();
    let input = $('input')[0];
    let request = $.ajax({
      url: "getUsers.php",
      method: "POST",
      data: {
        query: input.value
      }
    });
    request.done(function( msg ) {
      console.log(msg);
    });
  };
  let tr = $('table tr');
  for (let i = 1; i < tr.length; i++) {
    let cb = tr[i].getElementsByTagName('input');
    cb[0].onchange = function () {
      // toggle account type
      // only admins can have this role
      // checking the box gives the user an admin right
      let request = $.ajax({
        url: "api/toggleAccount?type",
        method: "POST",
        data: { userId: 1 }
      });
      request.done(function( msg ) {
        console.log("Account type");
      });
    };
    cb[1].onchange = function () {
      // toggle account status
      // either active or dormant
      // a dormant account can not login
      let request = $.ajax({
        url: "api/toggleAccount?status",
        method: "POST",
        data: { userId: 1 }
      });
      request.done(function( msg ) {
        console.log("Account status");
      });
    };
  }
}, false);
