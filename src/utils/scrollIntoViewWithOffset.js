export default function scrollIntoViewWithOffset(offset = 0) {
    const element = this;
    if (!element instanceof HTMLElement){
        alert('Invalid element')
        return;
    }
    if(!element.isConnected){
        alert('Not an DOM HTML element')
    }
    const { top } = element.getBoundingClientRect() || {};
    window.scrollBy({
        top: top - offset,
        left: 0,
        behavior : 'smooth'
    })
}
