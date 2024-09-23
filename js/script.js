let tooltipSections = document.getElementsByClassName('tooltip-section')
tooltipSections = Object.values(tooltipSections)
let t=[]
let tAttr

tooltipSections.forEach(function (section){
    section.addEventListener('mouseover',function (event){
        tAttr = event.target.dataset.time
        clearTimeout(t[tAttr])
        t[tAttr]=setTimeout(function (){
            event.target.classList.add('tooltip-section--hover')
        },600,event)
    })
})
tooltipSections.forEach(function (section){
    section.addEventListener('mouseleave',function (event){
        tAttr = event.target.dataset.time
        clearTimeout(t[tAttr])
        t[tAttr]=setTimeout(function (){
            event.target.classList.remove('tooltip-section--hover')
        },600,event)
    })
})
