/**
 * CSS hack taken from https://gist.github.com/Kenny-MWI/6b1a88ad38b5ffef347527a82becf054
 */


function hackSideBar() {
    document.querySelector('[data-qa="top-nav-help-button"]').parentNode.parentNode.parentNode.insertAdjacentElement('afterend', document.querySelector('[data-qa="user-button"]').parentNode.parentNode);
    document.querySelector('.p-tab_rail').style.display = 'none';
    document.querySelector('.p-control_strip').style.display = 'none';
    document.querySelector('.p-ia4_client .p-client_workspace--including_tab_rail').style.gridTemplateAreas = 'p-client-workspace p-client-workspace';
    document.querySelector('.p-ia4_client .p-client_workspace--including_tab_rail').className="p-theme_background";
}

// Initial run on page load
setTimeout(function () { hackSideBar()}, 500)

// Then regular runs in case some JS messes up with our hack
setInterval(function () {
    hackSideBar()
}, 5000)
