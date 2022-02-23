function toggle_menu(){
    document.getElementById('nav_links').classList.toggle('nav_active')
    document.getElementById('burger').classList.toggle('cross')
}
document.getElementById('burger').addEventListener('click', toggle_menu)