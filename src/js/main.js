
const event_control = () => {
  let menuView = false;
  document.getElementById('view_menu_vertical').addEventListener('click', () => {
    if (menuView === false) {
      document.getElementById('menu-principal').style.display = 'block';
      menuView = true;
    } else {
      document.getElementById('menu-principal').style.display = 'none';
      menuView = false;
    }
  }, false);
};
event_control();
