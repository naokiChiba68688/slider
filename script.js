console.log("hello world");
function right_scroll(){
    var image_width = document.getElementsByClassName('slider_image');
    var slider_content = document.getElementById('slider_inner');
    console.log(slider_content.scrollLeft);
    slider_content.scrollLeft = slider_content.scrollLeft + image_width[0].clientWidth;
    console.log(slider_content.scrollLeft);
}
function left_scroll(){

}