import { Link } from "react-router-dom"

function RedirectUser() {
    return (
        <>
            Thank you for reaching out to us. Our support team is currently unavailable,
            but we&apos;ll get back to you as soon as possible.
            <figure className={'redirect-user'} >
                <img src="/images/cat-redirect.jpg" alt="Cute Cat" className={`redirect-image fade-in-message`} />
                <figcaption className={`redirect-caption fade-in-edit-notice`}>
                    In the meantime, feel free to browse our website latest arrivals here {' '}
                    <span className={'redirect-link'}><Link to='/drops'>Drops</Link></span> <br />
                    <b>CLICK ARTSY TO CLOSE SUPPORT</b>
                </figcaption>
            </figure>
        </>
    )
}

export default RedirectUser
