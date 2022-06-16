/*
function _toggleSecEl(sec){
    sec.querySelector('.sec-content').classList.toggle('hide');
    sec.querySelector('.sec-toggle').classList.toggle('collapse');
}

function _hideSecEl(sec){
    sec.querySelector('.sec-content').classList.add('hide');
    sec.querySelector('.sec-toggle').classList.add('collapse');
}

function _showSecEl(sec){
    sec.querySelector('.sec-content').classList.remove('hide');
    sec.querySelector('.sec-toggle').classList.remove('collapse');
}
*/

function toggleSec(target){
    const sec = target.closest('section')
    sec.querySelector('.sec-content').classList.toggle('hide');
    sec.querySelector('.sec-toggle').classList.toggle('collapse');
}

function collapseSecs(){
    document.querySelectorAll('.sec-content').forEach(e => e.classList.add('hide'));
    document.querySelectorAll('.sec-toggle').forEach(e => e.classList.add('collapse'));
}

function expandSecs(){
    document.querySelectorAll('.sec-content').forEach(e => e.classList.remove('hide'));
    document.querySelectorAll('.sec-toggle').forEach(e => e.classList.remove('collapse'));
}

function saveMarkdown(){
    const date = document.body.querySelector('header time').getAttribute('datetime');
    const hdr = document.body.querySelector('header h1').innerHTML;
    const filename = `${date}_${hdr}.md`;

    download(htmlToMarkdown(), filename, 'text/markdown');
}

//canvas ===========================================
function drawLin(ctx, x, y, dx, dy, text, dash, color){
const margin = 2;
const size = 8;
color = color || 'black';

ctx.setLineDash(dash? [3,3]: []);
ctx.moveTo(x, y);
ctx.lineTo(x+dx, y+dy);
ctx.strokeStyle = color;
ctx.stroke();

//draw line lengend ============
var tx = x+(dx/2)
var ty = y+(dy/2)
if(dx && Math.abs(dy/dx) < 1)  //horizon line?
    ty += size + margin;  //align top
else
    tx -= margin;

ctx.font = `italic ${size}pt Calibri`;
ctx.textAlign = 'end';
ctx.fillStyle = 'blue'
ctx.fillText(text, tx, ty);

return [x+dx, y+dy];
}

//pos:
// 0  1  2
// 3 (4) 5
// 6  7  8
function drawLoc(ctx, x, y, text, pos){
const orig_x = x, orig_y = y;
const margin = 4;
const size = 12;

ctx.beginPath();
ctx.arc(x, y, 3, 0, 2*Math.PI);
ctx.fillStyle = 'black'
ctx.fill();
ctx.stroke()

const align = (pos%3 == 0)? 'end':
                (pos%3 == 1)? 'center': 'start';
x += (pos%3 -1) * margin;
y += Math.floor(pos/3) * size/2;
y += (Math.floor(pos/3)-1) * margin;

ctx.font = `italic ${size}pt Calibri`;
ctx.textAlign = align;
ctx.fillText(text, x, y);
return [orig_x, orig_y];
}

/* 
// Use Case ============================
const ctx = document.getElementById('trans-route').getContext('2d');
const x0 = 50, y0 = 50;
[x, y]   = drawLoc(ctx, x0, x0,'水里', 1);
[x, y]   = drawLin(ctx, x, y, 0, 50, '10m');
[mx, my] = drawLoc(ctx, x, y, '苗圃', 2);
[x, y]   = drawLin(ctx, x, y, 0, 25, '5m');
[nx, ny] = drawLoc(ctx, x, y, '新山', 3);
[x, y]   = drawLin(ctx, x, y, 0, 75, '15m');
[fx, fy] = drawLoc(ctx, x, y, '豐丘', 3);
[x, y]   = drawLin(ctx, x, y, 0, 150, '30m');
[ex, ey] = drawLoc(ctx, x, y, '東埔', 7);

[x, y]   = drawLin(ctx, mx, my, 100, 0, '20m');
[xx, yy] = drawLoc(ctx, x, y, '雙龍', 1);
[x, y]   = drawLin(ctx, x, y, 50, 0, '5k', true);
[bx, by] = drawLoc(ctx, x, y, '黑黑谷', 1);

[x, y]   = drawLin(ctx, ex, ey, (xx+bx)/2-ex, 0, '', true, 'green');
[x, y]   = drawLoc(ctx, x, y, '郡大山', 7);
[x, y]   = drawLin(ctx, x, y, 0, fy-y+10, '', true, 'green');
[qx, qy] = drawLoc(ctx, x, y, '鞍', 5);
[x, y]   = drawLin(ctx, x, y, 0, -25, '', true, 'green');
[rx, ry] = drawLoc(ctx, x, y, '巒安堂', 5);
[x, y]   = drawLin(ctx, x, y, 0, -25, '', true, 'green');
[sx, sy] = drawLoc(ctx, x, y, '鞍', 5);
[x, y]   = drawLin(ctx, x, y, (bx-x)/2, (by-y)/2, '', true, 'green');
[x, y]   = drawLoc(ctx, x, y, '治茆山', 5);
[x, y]   = drawLin(ctx, x, y, bx-x, by-y, '', true, 'green');
[x, y]   = drawLin(ctx, sx, sy, xx-sx, yy-sy, '', true, 'green');

[x, y]   = drawLin(ctx, qx, qy, -25, -10, '', true, 'green');
[x, y]   = drawLoc(ctx, x, y, '金子山', 6);
[x, y]   = drawLin(ctx, x, y, fx-x, fy-y, '', true, 'green');

[x, y]   = drawLin(ctx, rx, ry, -25, -10, '', true, 'green');
[x, y]   = drawLoc(ctx, x, y, '西巒大山', 3);
[x, y]   = drawLin(ctx, x, y, nx-x, ny-y, '人倫林道', true, 'green');
*/