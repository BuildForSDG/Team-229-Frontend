window.onload = function (){
    var fm = $('form')[0];
    fm.onsubmit = function (e){
        e.preventDefault();
        var input = $('input');
        if(input.length > 2){
            // signup form
            var select = $('select');
            if(input[0].value.replace(/ /gi,'').length == 0) alert("First name is required");
            else if(input[2].value.replace(/ /gi,'').length == 0) alert("Last name is required");
            else if(input[3].value.replace(/ /gi,'').length == 0 || input[4].value.replace(/ /gi,'').length == 0) alert("Please include address.");
            else if(input[5].value.replace(/ /gi,'').length == 0) alert("Your email is required.");
            else if(input[7].value.replace(/ /gi,'') == 0) alert("Your password is required.");
            else if(input[6].value.replace(/ /gi,'') != input[7].value.replace(/ /gi,'')) alert("Your passwords don't match.");
            else{
                var request = $.ajax({
                    url: "api/register",
                    method: "POST",
                    data: {
                        fname: input[0].value,
                        lname: input[1].value,
                        contact: input[2].value,
                        address_one: input[3].value,
                        address_two: input[4].value,
                        email: input[5].value,
                        password: input[6].value,
                        gender: select[0].value
                    }
                });
                request.done(function( msg ) {
                    console.log(msg);
                    window.location.href = "index.html";
                });
            }
        }
        else{
            // login
            // alert('login');
            var request = $.ajax({
                url: "api/login",
                method: "POST",
                data: { email: input[0].value, password: input[1].value }
            });
            request.done(function( msg ) {
                console.log(msg);
                window.location.href = "activities.html";
            });
        }
    };
};
