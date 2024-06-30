import gsap from "gsap";

import { ScrollTrigger  } from "gsap/ScrollTrigger";
import timeline = gsap.timeline;

/*interface Animation {
  target: string | Element | Array<Element>,
  animationProps: gsap.TweenVars,
  scrollProps: ScrollTrigger.Vars
}*/

/**
 * GSAP를 사용하여 스크롤 기반 애니메이션을 생성합니다.
 *
 * @param {string | Element | Array<Element>} target - 애니메이션을 적용할 대상 요소. CSS 선택자 문자열, DOM 요소, 또는 DOM 요소의 배열일 수 있습니다.
 * @param {gsap.TweenVars} animationProps - GSAP 애니메이션 속성. 예: { opacity: 0, x: 100, duration: 1 }
 * @param {ScrollTrigger.Vars} scrollProps - ScrollTrigger 플러그인 옵션. 기본 설정을 오버라이드합니다. 예: { end: "bottom center" }
 *
 * @returns {gsap.core.Tween} 생성된 GSAP Tween 인스턴스를 반환합니다.
 *
 * @example
 * animateWithGasp(".my-element", { opacity: 0, x: 100 }, { end: "bottom center" });
 */
export const animateWithGasp = (
  target,
  animationProps,
  scrollProps
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  })
}

export const animateWithGsapTimeline  = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )
}