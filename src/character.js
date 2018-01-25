let jspang = "技术胖";
// let blog="xxxxxxxxxxxxxxxx-----------------"+jspang+"ooooooooo";
let blog=`xxxxxxxxxxxxxxxx-----------------${jspang}ooooooooo</br>${1+2}
<b>xxxxx</b><br>`;
document.write(blog);
document.write(blog.includes(jspang));
document.write(blog.startsWith(jspang));
document.write(blog.endsWith("xx"));
document.write(jspang.repeat(10));