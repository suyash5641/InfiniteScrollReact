// import { useEffect, useRef, useCallback, useState } from "react";

// type Callback = (entry: IntersectionObserverEntry) => void;

// const useIntersectionObserver = (callback: Callback) => {
//   const observerRef = useRef<IntersectionObserver | null>(null);
//   const elementRef = useRef<HTMLDivElement | null>(null); // Updated type

//   const observerCallback = useCallback(
//     (entries: IntersectionObserverEntry[]) => {
//       if (entries[0].isIntersecting) {
//         callback(entries[0]);
//       }
//     },
//     [callback]
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 1.0,
//     });

//     observerRef.current = observer;

//     const currentElement = elementRef.current; // Copy ref value to a local variable
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement && observerRef.current) {
//         observerRef.current.unobserve(currentElement);
//       }
//     };
//   }, [observerCallback]);

//   return elementRef as React.RefObject<HTMLDivElement>;
// };

// // const useIntersectionObserver = () => {
// //   const observerRef = useRef<IntersectionObserver | null>(null);
// //   const [isIntersecting, setIsIntersecting] = useState(false);
// //   const elementRef = useRef<HTMLDivElement | null>(null);

// //   //   useEffect(() => {
// //   //     const observer = new IntersectionObserver(
// //   //       ([entry]) => {
// //   //         setIsIntersecting(entry.isIntersecting);
// //   //       },
// //   //       {
// //   //         root: null,
// //   //         rootMargin: "0px",
// //   //         threshold: 1,
// //   //       }
// //   //     );

// //   //     observerRef.current = observer;

// //   //     const currentElement = elementRef.current;
// //   //     if (currentElement) {
// //   //       observer.observe(currentElement);
// //   //     }

// //   //     return () => {
// //   //       if (currentElement && observerRef.current) {
// //   //         observerRef.current.unobserve(currentElement);
// //   //       }
// //   //     };
// //   //   }, []);

// //   const observerTarget = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         if (entries[0].isIntersecting) {
// //           setIsIntersecting(entries[0].isIntersecting);
// //         }
// //       },
// //       { threshold: 1 }
// //     );

// //     if (observerTarget.current) {
// //       observer.observe(observerTarget.current);
// //     }

// //     return () => {
// //       if (observerTarget.current) {
// //         observer.unobserve(observerTarget.current);
// //       }
// //     };
// //   }, [observerTarget]);

// //   return { observerTarget, isIntersecting };
// // };

// export default useIntersectionObserver;

import { useEffect, useRef, useCallback, useState } from "react";

const useIntersectionObserver = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [setPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (elementRef.current) observer.observe(elementRef.current);
  }, [handleObserver]);

  return { elementRef, page };
};

export default useIntersectionObserver;
