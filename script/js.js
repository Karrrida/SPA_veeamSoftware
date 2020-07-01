function pushButton() {
    let ccc = document.getElementsByClassName('avatar_img');
    let bbb = document.getElementsByClassName('fileImg');
    let ggg = localStorage.setItem('imgImgDisk', bbb.value);
    console.log(bbb.value);
    console.log(ggg);
    //if(!bbb.value) return;
    console.log(bbb.value);
    ccc.style.background = 'no-repeat url('+bbb.value+')';
    console.log(ccc)
}