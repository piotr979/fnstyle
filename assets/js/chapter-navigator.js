/* check if screen resizes, than check/uncheck input
 *  if screen size < 80em sidebar is hidden
 *  if bigger (desktop) than show sidebar
 *  it's based on:
 *  https://stackoverflow.com/a/46438472/1496972 
 */

if (document.getElementById('navigator-check') != null) {
    if (window.matchMedia('(min-width: 80em').matches) {
        document.getElementById('navigator-check').checked = true;
    }
    window.addEventListener('resize', function () {
        if (window.matchMedia('(max-width: 80em)').matches) {
            document.getElementById('navigator-check').checked = false;
        } else {
            document.getElementById('navigator-check').checked = true;
        }
    }, true);
}