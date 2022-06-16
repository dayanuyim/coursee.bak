
function _header(){
    const date = document.body.querySelector('header time').getAttribute('datetime');
    const hdr = document.body.querySelector('header h1').innerHTML;
    return `# ${hdr}(${date}) #\n\n`;
}

function _todoSec(){

}

function htmlToMarkdown(){
    let md = _header();
    md += _todoSec();

    return md;
}