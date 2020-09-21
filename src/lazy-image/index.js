export default function LazyLoad (selectors) {
    this.target = document.querySelectorAll(selectors);
    this.listen = (item) => {
        let options = {
            rootMargin: '0px',
            threshold: 0.01,
        };
        let callback = (entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.src = entries[0].target.dataset.src;
                observer.disconnect()
            }

        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(item);
    }

    this.init = () => {
        this.target.forEach(item => {
            this.listen(item);
        })
    }
}
