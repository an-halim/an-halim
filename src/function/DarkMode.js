export default function DarkMode(){
    let theme = localStorage.getItem('theme')
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}