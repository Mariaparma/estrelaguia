import "./globals.css";

export const metadata = {
    title: "Wiki-Tech",
    description: "Projeto pra mostrar tudo que eu sei",
    icons: {
        icon: "/icons/estrelaguia.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}