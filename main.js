class Carousel {
    constructor(viewer) {
        this.viewer = viewer;
        this.cacheDom();
        this.addEventListeners();
        this.render();
    }

    cacheDom() {
        this.root = document.querySelector('#carousel');
        this.left = this.root.querySelector('.left');
        this.right = this.root.querySelector('.right');
        this.platform = this.root.querySelectorAll('.platform.slide');
        this.location = this.root.querySelectorAll('.location.locators');
        
    }

    bindEventListeners() {
        this.left.addEventListeners("click", console.log);
        this.right.addEventListeners("click", console.log);
        this.locator.addEventListeners("click", console.log);
    }

    right() {

    }

    left() {

    }

    locator() {

    }

    render() {
        this.
    }

}

window.XXXX = new Carousel[];