import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';

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
            <NavBar/>
            <section className='section-first'>
                <h1 className="hidden">
                    Hello! I'm Ethan
                </h1>
                <p className="hidden">
                    Welcome to my website.
                </p>
            </section>
            <section>
                <h1 className="hidden">
                    This is a WIP
                </h1>
                <p className="hidden">
                    Using ReactJS and CSS
                </p>
            </section>
        </body>
    );
}

export default Body1;