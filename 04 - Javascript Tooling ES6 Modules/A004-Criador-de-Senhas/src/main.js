import './assets/css/style.css';
import HTMLFormatter from './modules/htmlFormatter';

document.addEventListener('click', (e)=>{
    
    if(e.target.tagName.toLowerCase() === 'button'){
        e.preventDefault();
        HTMLFormatter.appendPassword();
    };
})
