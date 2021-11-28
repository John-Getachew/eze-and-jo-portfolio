import Link from "next/link";
import { useContext, useEffect, useRef } from "react";
import { DrawerContext } from "../../../contexts/drawer-context";
import gsap from "gsap";
import {
  HamburgerMenuRootS,
  MenuSecondaryBackgroundColor,
  MenuLayer,
  MenuCityBackground,
  MenuLinks,
  Wrapper,
  Nav,
  MenuList,
  MenuListItem,
  LinkAnchor,
  Info,
  Locations,
} from "./style";

const Drawer = ({ isDrawerToggleClicked, handleToggleClick }) => {
  let menuRef = useRef(null);
  let revealMenuRef = useRef(null);
  let revealMenuBackgroundRef = useRef(null);
  let serviceBackgroundRef = useRef(null);
  let line1Ref = useRef(null);
  let line2Ref = useRef(null);
  let line3Ref = useRef(null);
  let line4Ref = useRef(null);
  let infoRef = useRef(null);

  const services = [
    { name: "Hiring", image: "./assets/images/hiring.jpg" },
    { name: "Development", image: "./assets/images/development.jpg" },
    { name: "Course", image: "./assets/images/course.jpg" },
    { name: "Course", image: "./assets/images/course.jpg" },
  ];

  useEffect(() => {
    if (isDrawerToggleClicked.clicked === false) {
      gsap.to([revealMenuRef.current, revealMenuBackgroundRef.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menuRef.current, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      isDrawerToggleClicked.clicked === true ||
      (isDrawerToggleClicked.clicked === true &&
        isDrawerToggleClicked.initial === null)
    ) {
      gsap.to(menuRef.current, {
        duration: 0,
        css: { display: "block" },
      });
      gsap.to([revealMenuBackgroundRef.current, revealMenuRef.current], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackgroundRef.current, revealMenuRef.current);
      fadeInUp(infoRef.current);
      staggerLinkText(
        line1Ref.current,
        line2Ref.current,
        line3Ref.current,
        line4Ref.current
      );
    }
  }, [isDrawerToggleClicked]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right",
      skew: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const staggerLinkText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  };

  const linkHoverEffect = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 5,
      ease: "power3.inOut",
    });
  };

  const linkHoverEffectExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  const handleServiceBackgroundAppear = (serviceBgImage) => {
    gsap.to(serviceBackgroundRef.current, {
      duration: 0,
      backgroundImage: `url(${serviceBgImage})`,
    });

    gsap.to(serviceBackgroundRef.current, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });

    gsap.from(serviceBackgroundRef.current, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleServiceBackgroundDisappear = () => {
    gsap.to(serviceBackgroundRef.current, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleLinkMouseHover = (image, e) => {
    linkHoverEffect(e);
    handleServiceBackgroundAppear(image);
  };

  const handleLinkMouseOut = (e) => {
    linkHoverEffectExit(e);
    handleServiceBackgroundDisappear();
  };

  return (
    <HamburgerMenuRootS ref={menuRef}>
      {/* <img src={courseImage} width={900} height={900} alt={"hi"} /> */}
      <MenuSecondaryBackgroundColor
        ref={revealMenuBackgroundRef}
      ></MenuSecondaryBackgroundColor>
      <MenuLayer ref={revealMenuRef}>
        <MenuCityBackground ref={serviceBackgroundRef}></MenuCityBackground>
        <div className="container">
          <Wrapper>
            <MenuLinks>
              <Nav>
                <MenuList>
                  <MenuListItem>
                    <Link href="/" passHref={true}>
                      <LinkAnchor
                        onMouseEnter={(e) =>
                          handleLinkMouseHover(services[0].image, e)
                        }
                        onMouseOut={(e) => handleLinkMouseOut(e)}
                        onClick={handleToggleClick}
                        ref={line1Ref}
                      >
                        Home
                      </LinkAnchor>
                    </Link>
                  </MenuListItem>
                  <MenuListItem>
                    <Link passHref={true} href="/about-us">
                      <LinkAnchor
                        onMouseEnter={(e) =>
                          handleLinkMouseHover(services[1].image, e)
                        }
                        onMouseOut={(e) => handleLinkMouseOut(e)}
                        onClick={handleToggleClick}
                        ref={line2Ref}
                      >
                        About us
                      </LinkAnchor>
                    </Link>
                  </MenuListItem>
                  <MenuListItem>
                    <Link passHref={true} href="/services/courses">
                      <LinkAnchor
                        onMouseEnter={(e) =>
                          handleLinkMouseHover(services[2].image, e)
                        }
                        onMouseOut={(e) => handleLinkMouseOut(e)}
                        onClick={handleToggleClick}
                        ref={line3Ref}
                      >
                        Portfolio
                      </LinkAnchor>
                    </Link>
                  </MenuListItem>
                  <MenuListItem>
                    <Link passHref={true} href="/services/courses">
                      <LinkAnchor
                        onMouseEnter={(e) =>
                          handleLinkMouseHover(services[3].image, e)
                        }
                        onMouseOut={(e) => handleLinkMouseOut(e)}
                        onClick={handleToggleClick}
                        ref={line4Ref}
                      >
                        Services
                      </LinkAnchor>
                    </Link>
                  </MenuListItem>
                </MenuList>
              </Nav>
              {/* <Info ref={infoRef}>
                <h3>Our promise</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </p>
              </Info> */}
              {/* <Locations>
                {services.map((service) => (
                  <span
                    onMouseOver={() =>
                      handleServiceBackgroundAppear(service.image)
                    }
                    onMouseOut={handleServiceBackgroundDisappear}
                    key={service.name}
                  >
                    {service.name}
                  </span>
                ))}
              </Locations> */}
            </MenuLinks>
          </Wrapper>
        </div>
      </MenuLayer>
    </HamburgerMenuRootS>
  );
};

export default Drawer;
