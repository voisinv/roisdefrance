function getDocumentHeight() {
  const D = document;

  const body = D.body || {};
  const documentElement = D.documentElement || {};
  return Math.max(
    body.scrollHeight, documentElement.scrollHeight,
    body.offsetHeight, documentElement.offsetHeight,
    body.clientHeight, documentElement.clientHeight
  ) || 1;
}

function getWindowHeight() {
  return window.innerHeight ||
    (document.documentElement || document.body || {}).clientHeight || 1;
}

function getWindowWidth() {
  return window.innerWidth || 1;
}

function getDocumentScrollTop() {
  return window.pageYOffset ||
    ((document.documentElement || (document.body || {}).parentNode ||
      document.body) || {}: any).scrollTop || 1;
}

export {
  getDocumentHeight,
  getWindowHeight,
  getWindowWidth,
  getDocumentScrollTop
}