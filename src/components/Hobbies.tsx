import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Hobbies.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const hobbies = [
  {
    title: "Volleyball",
    category: "Team Spirit · Agility",
    description:
      "Love the fast-paced rallies and team coordination. Volleyball keeps me sharp, focused, and always thinking one step ahead.",
    image: "/images/hobby-volleyball.svg",
  },
  {
    title: "Cricket",
    category: "Strategy · Precision",
    description:
      "Whether batting or bowling, cricket teaches patience and tactical thinking — skills that translate well into problem-solving.",
    image: "/images/hobby-cricket.svg",
  },
  {
    title: "Football",
    category: "Passion · Teamwork",
    description:
      "Nothing beats the thrill of the pitch. Football fuels my competitive spirit and love for collaborative play.",
    image: "/images/hobby-football.svg",
  },
];

const Hobbies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? hobbies.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === hobbies.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) =>
          prev === hobbies.length - 1 ? 0 : prev + 1
        );
      }
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };
  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <div className="hobbies-section" id="hobbies">
      <div className="hobbies-container section-container">
        <div className="hobbies-label">
          <span className="hobbies-label-dot"></span>
          <span>BEYOND CODE</span>
        </div>
        <h2>
          My <span>Hobbies</span>
        </h2>

        <div
          className="hobby-carousel-wrapper hobby-glass"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="hobby-arrow hobby-arrow-left"
            onClick={goToPrev}
            aria-label="Previous hobby"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="hobby-arrow hobby-arrow-right"
            onClick={goToNext}
            aria-label="Next hobby"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="hobby-track-container">
            <div
              className="hobby-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {hobbies.map((hobby, index) => (
                <div className="hobby-slide" key={index}>
                  <div className="hobby-content">
                    <div className="hobby-info">
                      <div className="hobby-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="hobby-details">
                        <h4>{hobby.title}</h4>
                        <p className="hobby-category">{hobby.category}</p>
                        <p className="hobby-description">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                    <div className="hobby-image-wrapper">
                      <WorkImage image={hobby.image} alt={hobby.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hobby-dots">
            {hobbies.map((_, index) => (
              <button
                key={index}
                className={`hobby-dot ${
                  index === currentIndex ? "hobby-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to hobby ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
