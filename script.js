console.log("hello world");
function right_scroll(){
    var image_width = document.getElementsByClassName('slider_image');
    var slider_content = document.getElementById('slider_inner');
    console.log(image_width[0].clientWidth);
    slider_content.scrollLeft += image_width[0].clientWidth;
}
function left_scroll(){
    var image_width = document.getElementsByClassName('slider_image');
    var slider_content = document.getElementById('slider_inner');
    console.log(image_width[0].clientWidth);
    slider_content.scrollLeft -= image_width[0].clientWidth;
}