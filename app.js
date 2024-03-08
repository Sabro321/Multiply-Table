var num = prompt("Write Table which you want")
for (i = 1; i <= 10; i++) {
    document.write("<div>")
    document.write(num + "x" + i + "=" + i * num);
    document.write("</div>")
}