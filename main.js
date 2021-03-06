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
        
    }

    bindEventListeners() {
        this.left.addEventListener("click", this.leftClick.bind(this));
        this.right.addEventListener("click", this.rightClick.bind(this));
    }

    rightClick() {
        this.imageNum += 1
        this.render();
    }

    leftClick() {
        this.imageNum -= 1
        this.render();
    }


    render() {
        this.platform.style.left = `${this.imageNum * 251}px`;
    }

}

window.viewer = new Carousel();