// Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields: "id,birthday,email,gender,location,name"}, function(response) {
      console.log('Successful login for: ' + response.name);
      console.log(response);
      var location = response.location;
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!' + '<br />' +'<TABLE><TR><TD> Id </TD><TD>'+response.id+'</TD></TR><TR> <TD> Birthday </TD> <TD>'+response.birthday+'</TD> </TR><TR> <TD> Email </TD> <TD>'+response.email+'</TD> </TR> <TR> <TD> Gender </TD> <TD>'+response.gender+'</TD> </TR></TABLE> <br />';

        /*FB.api('/' + location.id, {
            fields: 'location'
        }, function(locationResponse) {
            console.log(locationResponse); //will print your desired location object
        });*/ 

        console.log('Successfully called me/friends');
        FB.api('/me/friends', {
          fields:"id"},
          function(friendsResponse) {
            console.log('Inside function');
            console.log(friendsResponse);
          });
        });
    }