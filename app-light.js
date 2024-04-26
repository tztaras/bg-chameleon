document.addEventListener('DOMContentLoaded', () => {
    console.log(window.location.hash);
    //'#5'




    try {

        if (window.location.hash) {
            const hash = +window.location.hash.substring(1);
            console.log(hash);

            if (!isNaN(hash)) {
                const element = document.querySelector(`ul li:nth-child(${hash})`);
                console.log(element);
                if (element) element.style.color = '#EE204D';
                element.style.textDecoration = 'underline';
                // element.style.backgroundColor = '#141010';
            }
        }
    }
        catch (err) {
            alert('HASH NOT FOUND!');
        }
});

function flickSwitch(arr) {
    arr= ['bicycle', 'jarmony', 'flick', 'sheep', 'flick']
  let flick = true;
  let res = arr.map(item=> item =='flick' ? flick = !flick : flick);
  console.log(res)
    return res
}
flickSwitch();