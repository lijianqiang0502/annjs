require('intersection-observer');

export default function LazyLoad (selector, bottomCallback, delay = 1000) {
    this.target = document.querySelector(selector);
    this.listen = (item) => {
        let options = {
            rootMargin: '0px',
            threshold: 0.01,
        };
        let callback = (entries) => {
            if (entries[0].isIntersecting) {
                bottomCallback();
                observer.disconnect()
            }

        }
        let observer = new IntersectionObserver(callback, options);

        setInterval(()=> {
            observer.observe(this.target.lastElementChild);
        },delay)
    }

    this.init = () => {
        this.listen(this.target);
    }
}

