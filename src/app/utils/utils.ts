

export const CircleOnHover = ({ imageClass }: { imageClass: string }) => {

    const imageContainer: HTMLElement | null = document.querySelector(`.${imageClass}`);
    const circle: HTMLElement | null = document.querySelector(".cursor-circle");
    let timer: NodeJS.Timeout;

    if (!imageContainer || !circle) return;

    const handleMouseEnter = () => {
      circle.classList.add("in");
    };

    const handleMouseLeave = () => {
      circle.classList.remove("in");
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = imageContainer.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (
        clientX >= left &&
        clientY >= top &&
        clientX <= left + width &&
        clientY <= top + height
      ) {
        circle.style.left = `${clientX - left}px`;
        circle.style.top = `${clientY - top}px`;

        if (timer) clearTimeout(timer);

        circle.classList.add("in");

        timer = setTimeout(() => {
          circle.classList.remove("in");
        }, 500);
      }
    };

    imageContainer.addEventListener("mouseenter", handleMouseEnter);
    imageContainer.addEventListener("mouseleave", handleMouseLeave);
    imageContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      imageContainer.removeEventListener("mouseenter", handleMouseEnter);
      imageContainer.removeEventListener("mouseleave", handleMouseLeave);
      imageContainer.removeEventListener("mousemove", handleMouseMove);
      if (timer) clearTimeout(timer);
    };



};
