import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./EngineerProfile.module.css";
import "../animations.css";

function EngineerProfile() {
    const svg = useRef(null);
    const paragraph = useRef(null);
    const video = useRef(null);

    useGSAP(function () {
        if (!CSS.supports('animation-timeline: scroll()')) {
            gsap.registerPlugin(ScrollTrigger);
            console.clear();
            const scrub = 0.2
            gsap.timeline().to(svg.current, {
                scrollTrigger: {
                  invalidateOnRefresh: true,
                  trigger: svg.current.parentNode,
                  scrub,
                  start: "top top",
                  end: "bottom top-=25%"
                },
                opacity: 1,
              })
              .to(svg.current, {
                scrollTrigger: {
                  invalidateOnRefresh: true,
                  trigger: svg.current.parentNode,
                  scrub,
                  start: "top top",
                  end: "bottom top"
                },
                keyframes: {
                  "0%": { background: "transparent" },
                  "70%": { background: "transparent", color: "transparent !important"},
                  "95%": { background: "transparent"},
                  "100%": { z: "99vh", background: "black" }
                }
              }, 0);

            gsap.timeline().to(paragraph.current, {
                opacity: 1,
                immediateRender: false,
                scrollTrigger: {
                  trigger: paragraph.current.parentNode.parentNode,
                  scrub,
                  start: "top bottom",
                  end: "top 50%"
                }
              })
              .to(paragraph.current, {
                opacity: 0,
                immediateRender: false,
                scrollTrigger: {
                  trigger: paragraph.current.parentNode.parentNode,
                  scrub,
                  start: "bottom bottom",
                  end: "bottom 50%"
                }
              });

            gsap.timeline()
              .to(video.current, {
                opacity: 1,
                immediateRender: false,
                scrollTrigger: {
                  trigger: video.current.parentNode,
                  scrub,
                  start: "top bottom",
                  end: "top 50%"
                }
              })
              .to(video.current, {
                opacity: 0,
                immediateRender: false,
                scrollTrigger: {
                  trigger: video.current.parentNode,
                  scrub,
                  start: "bottom bottom",
                  end: "bottom 50%"
                }
            });
        }
    })

    return (
      <main className={styles['engineer']}>
        <section className={`${styles['engineer__mobile']} slide-in`}>
          <h1 className={`${styles['engineer_title_text']}`}>{"I'M"} A <br/> FRONTEND ENGINEER</h1>
          <img className={styles['image']} src="/images/cat.png" alt="CAT IMAGE" />
          <h3 className={styles['engineer_name_text']}>RINWAOLUWA ODEJOBI</h3>
          <p className={styles['engineer__note']} ref={paragraph}>
                Translate words on the z-axis and darken the background. At the same time
                fade in video and this text. Power with CSS scroll animations or GSAP ScrollTrigger.
                <br />Pretty cool.
              </p>
        </section>
        <section className={styles['engineer__desktop']}>
          <h1 className={`${styles['text']} bounce`}>Scroll Down &dArr;</h1>
          <section className={`${styles['engineer__name']}`}>
            <div className={styles['section__content']}>
              <svg ref={svg}>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                  Rinwaoluwa Odejobi
                </text>
              </svg>
            </div>
          </section>
          <section className={`${styles['engineer__profile']}`}>
            <div className={styles['section__content']}>
              <p className={styles['engineer__note']} ref={paragraph}>
                Translate words on the z-axis and darken the background. At the same time
                fade in video and this text. Power with CSS scroll animations or GSAP ScrollTrigger.
                <br />Pretty cool.
              </p>
              <img className={styles['image']} src="/images/cat.png" alt="" />
            </div>
          </section>
          <footer className={`${styles['footer']}`}>
            <div className={styles['section__content']}>
              <h2 className={styles['reach']}>Rinwa.<br /><span>Reach out!</span></h2>
            </div>
          </footer>
        </section>
      </main>
    )
}

export default EngineerProfile
