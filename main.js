class Carousel {
    constructor(viewer) {
        this.viewer = viewer;
        this.imageNum = 0;
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    }

    cacheDom() {
        this.root = document.querySelector('#carousel');
        this.left = this.root.querySelector('.left');
        this.right = this.root.querySelector('.right');
        this.platform = this.root.querySelector('.platform');
        this.images = this.platform.querySelectorAll('img');
        
    }

    bindEventListeners() {
        this.left.addEventListener("click", this.leftClick.bind(this));
        this.right.addEventListener("click", this.rightClick.bind(this));
    }

    rightClick() {
        this.imageNum = (((this.imageNum + 1) % this.images.length) + this.images.length) % this.images.length;
        this.render();
    }

    leftClick() {
        this.imageNum = (((this.imageNum + 1) % this.images.length) + this.images.length) % this.images.length;
        this.render();
    }


    render() {
        this.platform.style.left = `-${this.imageNum * 251}px`;
    }

}

window.viewer = new Carousel();