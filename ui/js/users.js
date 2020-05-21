window.addEventListener('load', dashboard_config, false);
window.addEventListener('resize', dashboard_config, false);

function dashboard_config(){
  // configure the width of the right pane and the overall hight of the dashboard window
  // the dashboard has a margin of 10px at the top and at the bottom
  // the panes also have a padding of 10px hence the value (40)
  // we have to retrieve the offsetHeight of the 'topbar' to get the remaining height of the window
  var paneHeight = window.innerHeight - 40 - $('.topbar')[0].offsetHeight;

  var paneWidth = $('.user_container')[0].children[0].offsetWidth - $('nav')[0].offsetWidth;
  // set the width
  $('section')[0].style.width = paneWidth + 'px';
  $('section')[0].children[0].style.height = paneHeight + 'px';
  $('nav')[0].children[0].style.height = paneHeight + 'px';
  // console.log(paneHeight);
}
