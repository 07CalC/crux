



export const Footer = () => {
    return (
        <footer className="bg-background bottom-0  text-foreground py-4 text-center">
        <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
            href=""
            className="hover:text-purple-500"
            >
            cruX
            </a>{" "}
            All rights reserved.
        </p>
        </footer>
    );
}