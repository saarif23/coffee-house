

const Footer = () => {
    return (
        <footer className="" >
          <div className="footer py-10 px-20 bg-base-200 text-base-content" style={{ backgroundImage: 'url("https://i.ibb.co/tH47zBq/13.jpg")' }}>
          <aside>
                <img className="w-20" src="https://i.ibb.co/MC7m9Wq/logo1.png" alt="" />
                <h3 className="text-3xl">Coffee House</h3>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
            <div className="flex justify-center gap-3 items-center p-3" style={{ backgroundImage: 'url("https://i.ibb.co/bNQ4N4t/24.jpg")' }}>
          <p className="text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
        </div>
        </footer>
    );
};

export default Footer;