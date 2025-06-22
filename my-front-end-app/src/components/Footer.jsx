export default function Footer() {
    return (
        <footer className="w-full border-t bg-white dark:bg-gray-900 mt-auto">
            <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    );
}
