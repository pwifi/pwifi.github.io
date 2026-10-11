/* 全站导航：桌面端横向链接，移动端汉堡菜单（自动从 .nav-links 生成） */
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var links = nav.querySelector('.nav-links');
  var inner = nav.querySelector('.nav-inner');
  if (!links || !inner) return;

  var btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', '打开导航菜单');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';

  var menu = document.createElement('div');
  menu.className = 'nav-menu';
  var as = links.querySelectorAll('a');
  for (var i = 0; i < as.length; i++) menu.appendChild(as[i].cloneNode(true));

  nav.appendChild(menu);
  inner.appendChild(btn);

  function close() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'A') close();
  });
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !nav.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) close();
  });
})();
