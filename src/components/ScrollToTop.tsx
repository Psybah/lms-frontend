import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // The dashboard layout uses overflow-auto on <main>, not window scroll
        const scrollContainer = document.querySelector("main.overflow-auto");
        if (scrollContainer) {
            scrollContainer.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
