export default function changeCursor(data) {
  document.body.style.cursor = `url(${data}), auto`;
  setTimeout(() => {
    document.body.style.cursor = 'default';
  }, 1000);
}
