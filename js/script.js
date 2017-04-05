function Ellipse(className){
    var self=this;
    this.main = document.getElementsByClassName('main');
    
self.main = document.getElementById('main');
self.img = document.getElementById('img');

self.img.addEventListener('click', function(event) {
   self.x = event.x;
    self.y = event.y;

    self.span = document.createElement('span');
    self.span.className = 'badge';
    self.span.style.top = self.y;
    self.span.style.left = self.x;
    self.main.appendChild(self.span);
});

self.main.addEventListener('click', function(event) {
    if (event.target.className == 'badge') {
        self.main.removeChild(event.target);
    }
})
}
var body=new Ellipse('main');