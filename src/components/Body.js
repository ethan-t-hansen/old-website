import Container from 'react-bootstrap/Container';

function Body1() {

    window.addEventListener('load', function (event) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <body>
            <section>
                <h1 className="hidden">
                    Hello!
                </h1>
                <p className="hidden">
                    This is my website.
                </p>
            </section>
            <section>
                <h1 className="hidden">
                    Buy my product!
                </h1>
                <p className="hidden">
                    The quick brown fox jumps over the fence
                </p>
            </section>
        </body>
    );
}

export default Body1;