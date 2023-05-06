import './globals.scss';
import NavLink from './NavLink';

export const metadata = {
    title: 'Sam Hill Web Development',
    description: 'Quality web development services with a focus on eCommerce.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body>

                <header>
                    <h1>Sam Hill Web Development</h1>
                    <nav>
                        <ul>
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About Me</NavLink>
                            <NavLink href="/projects">Projects</NavLink>
                            <NavLink href="/resume.pdf">Resume</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                        </ul>
                    </nav>
                </header>

                {children}

                <footer>
                    <p>&copy; {new Date().getFullYear()} Sam Hill</p>
                </footer>

            </body>
        </html>
    );
};